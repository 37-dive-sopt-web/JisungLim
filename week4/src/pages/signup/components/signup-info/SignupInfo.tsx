import { TextField } from "@/shared/components/TextField/TextField";
import * as styles from "./SignupInfo.css";
import { TEXT_FIELD_TYPES } from "@/shared/constants/textField";
import { Button } from "@/shared/components/Button/Button";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useState } from "react";

interface Props {
  onClick: (name: string, email: string, age: number) => void;
}

const SignupInfo = ({ onClick }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const isFormValid = (): boolean => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      age.trim() !== "" &&
      !isNaN(Number(age))
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      onClick(name, email, Number(age));
    }
  };

  return (
    <div className={styles.inputContainer}>
      <TextField
        type={TEXT_FIELD_TYPES.TEXT}
        label="이름"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        type={TEXT_FIELD_TYPES.TEXT}
        label="이메일"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        type={TEXT_FIELD_TYPES.TEXT}
        label="나이"
        placeholder="나이를 입력하세요(숫자)"
        value={age}
        onChange={handleAgeChange}
      />
      <Button
        variant={BUTTON_VARIANTS.CONFIRM}
        onClick={handleSubmit}
        disabled={!isFormValid()}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignupInfo;
