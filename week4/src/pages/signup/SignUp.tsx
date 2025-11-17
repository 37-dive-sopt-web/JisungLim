import { Button } from "@/shared/components/Button/Button";
import * as styles from "./SignUp.css";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import SignupId from "@/pages/signup/components/signup-id/SignupId";
import SignupPassword from "@/pages/signup/components/signup-password/SignupPassword";
import SignupInfo from "@/pages/signup/components/signup-info/SignupInfo";
import { STEPS } from "@/pages/signup/constants/steps";
import { useSignUp } from "@/pages/signup/hooks/useSignUp";

const SignUp = () => {
  const {
    step,
    handleReturnClick,
    handleIdSubmit,
    handlePasswordSubmit,
    handleInfoSubmit,
  } = useSignUp();

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
