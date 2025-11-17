import { Button } from "@/shared/components/Button/Button";
import * as styles from "./SignUp.css";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";
import { useState } from "react";
import SignupId from "@/pages/signup/components/signup-id/SignupId";
import SignupPassword from "@/pages/signup/components/signup-password/SignupPassword";
import SignupInfo from "@/pages/signup/components/signup-info/SignupInfo";
import { STEPS, type Step } from "@/pages/signup/constants/steps";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(STEPS.ID);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleReturnClick = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleIdSubmit = (id: string) => {
    setId(id);
    setStep(STEPS.PASSWORD);
  };

  const handlePasswordSubmit = (password: string) => {
    setPassword(password);
    setStep(STEPS.INFO);
  };

  const handleInfoSubmit = (name: string, email: string, age: number) => {
    // TODO: 회원가입 API 호출
    console.log({ id, password, name, email, age });
    // 성공 시 로그인 페이지로 이동, 실패 시 회원가입 페이지로 이동
    // navigate(ROUTES.LOGIN);
  };

  const renderStep = () => {
    switch (step) {
      case STEPS.ID:
        return <SignupId onClick={handleIdSubmit} />;
      case STEPS.PASSWORD:
        return <SignupPassword onClick={handlePasswordSubmit} />;
      case STEPS.INFO:
        return <SignupInfo onClick={handleInfoSubmit} />;
      default:
        return <SignupId onClick={handleIdSubmit} />;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <div>{renderStep()}</div>
      <p className={styles.infoContainer}>
        <span className={styles.infoText}>이미 계정이 있나요?</span>
        <Button
          variant={BUTTON_VARIANTS.TEXT_MEDIUM}
          onClick={handleReturnClick}
        >
          로그인으로 돌아가기
        </Button>
      </p>
    </div>
  );
};

export default SignUp;
