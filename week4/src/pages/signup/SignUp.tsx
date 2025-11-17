import { Button } from "@/shared/components/Button/Button";
import * as styles from "./SignUp.css";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";
import { useState } from "react";
import SignupId from "@/pages/signup/signup-id/SignupId";
import SignupPassword from "@/pages/signup/signup-password/SignupPassword";

const SignUp = () => {
  const navigate = useNavigate();
  const [isIdVerified, setIsIdVerified] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleReturnClick = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleIdClick = (id: string) => {
    setIsIdVerified(true);
    setId(id);
  };

  const handlePasswordClick = (password: string) => {
    setPassword(password);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <div>
        {!isIdVerified ? (
          <SignupId onClick={handleIdClick} />
        ) : (
          <SignupPassword onClick={handlePasswordClick} />
        )}
      </div>
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
