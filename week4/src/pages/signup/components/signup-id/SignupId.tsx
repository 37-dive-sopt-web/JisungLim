import { TextField } from "@/shared/components/TextField/TextField";
import * as styles from "./SignupId.css";
import { TEXT_FIELD_TYPES } from "@/shared/constants/textField";
import { Button } from "@/shared/components/Button/Button";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useState } from "react";

interface Props {
  onClick: (id: string) => void;
}

const SignupId = ({ onClick }: Props) => {
  const [id, setId] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <TextField
        type={TEXT_FIELD_TYPES.ID}
        label="아이디"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={handleIdChange}
      />
      <Button
        variant={BUTTON_VARIANTS.CONFIRM}
        onClick={() => onClick(id)}
        disabled={id.trim() === ""}
      >
        다음
      </Button>
    </div>
  );
};

export default SignupId;
