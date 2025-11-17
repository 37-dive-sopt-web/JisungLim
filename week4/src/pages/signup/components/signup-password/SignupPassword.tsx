import { TextField } from "@/shared/components/TextField/TextField";
import * as styles from "./SignupPassword.css";
import { TEXT_FIELD_TYPES } from "@/shared/constants/textField";
import { Button } from "@/shared/components/Button/Button";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useState } from "react";

interface Props {
  onClick: (password: string) => void;
}

const SignupPassword = ({ onClick }: Props) => {
  const [psw, setPsw] = useState("");
  const [pswConfirm, setPswConfirm] = useState("");

  const handlePswChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPsw(e.target.value);
  };

  const handlePswConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswConfirm(e.target.value);
  };

  const isPasswordIdentical = (): boolean => {
    if (psw.trim() === "" || pswConfirm === "") return false; 
    return psw === pswConfirm;
  };

  return (
    <div className={styles.inputContainer}>
      <TextField
        type={TEXT_FIELD_TYPES.PASSWORD}
        label="비밀번호"
        detail="8~64자, 대소문자/숫자/특수문자 각각 1개 이상 포함, 공백 미허용"
        placeholder="비밀번호를 입력하세요"
        value={psw}
        onChange={handlePswChange}
      />
      <TextField
        type={TEXT_FIELD_TYPES.PASSWORD}
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        value={pswConfirm}
        onChange={handlePswConfirmChange}
      />
      <Button
        variant={BUTTON_VARIANTS.CONFIRM}
        onClick={() => onClick(psw)}
        disabled={!isPasswordIdentical()}
      >
        다음
      </Button>
    </div>
  );
};

export default SignupPassword;
