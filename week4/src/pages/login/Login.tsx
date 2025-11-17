import { TextField } from "@/shared/components/TextField/TextField";
import * as styles from "./Login.css";
import { TEXT_FIELD_TYPES } from "@/shared/constants/textField";
import { Button } from "@/shared/components/Button/Button";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";
import { login } from "@/apis/apis";
import { useState } from "react";
import { saveUserId } from "@/shared/utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignupClick = () => {
    navigate(ROUTES.SIGNUP);
  };

  const handleLoginClick = async () => {
    try {
      const response = await login({
        username,
        password,
      });

      console.log("로그인 성공:", response);
      saveUserId(response.userId); // localStorage에 userId 저장
      alert(`${response.message}`);
      navigate(ROUTES.MYPAGE);
    } catch (error) {
      console.error("로그인 실패:", error);
      alert(`로그인 실패: ${error}`);
    }
  };

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로그인</h1>
      <div className={styles.inputContainer}>
        <TextField
          type={TEXT_FIELD_TYPES.ID}
          label="아이디"
          placeholder="아이디를 입력하세요"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          type={TEXT_FIELD_TYPES.PASSWORD}
          label="비밀번호"
          detail="8~64자, 대소문자/숫자/특수문자 각각 1개 이상 포함, 공백 미허용"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant={BUTTON_VARIANTS.CONFIRM}
          onClick={handleLoginClick}
          disabled={!isFormValid}
        >
          로그인
        </Button>
      </div>

      <div className={styles.signUpContainer}>
        <Button
          variant={BUTTON_VARIANTS.TEXT_MEDIUM}
          onClick={handleSignupClick}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default Login;
