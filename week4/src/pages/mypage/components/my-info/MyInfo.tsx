import { TextField } from "@/shared/components/TextField/TextField";
import * as styles from "./MyInfo.css";
import { TEXT_FIELD_TYPES } from "@/shared/constants/textField";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useState, useEffect } from "react";
import { Button } from "@/shared/components/Button/Button";
import { Info } from "@/shared/components/Info/Info";
import { getUserById, updateProfile } from "@/apis/apis";
import { getUserId } from "@/shared/utils/auth";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";

const MyInfo = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = getUserId();
        if (!userId) {
          navigate(ROUTES.LOGIN);
          return;
        }

        const userData = await getUserById(userId);
        setUsername(userData.username);
        setName(userData.name);
        setEmail(userData.email);
        setAge(userData.age.toString());
      } catch (error) {
        console.error("사용자 정보 조회 실패:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

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

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    try {
      const userId = getUserId();
      if (!userId) {
        alert("userId를 찾을 수 없습니다.");
        navigate(ROUTES.LOGIN);
        return;
      }

      const response = await updateProfile(userId, {
        name,
        email,
        age: Number(age),
      });

      console.log("개인정보 수정 성공:", response);
      setUsername(response.username);
      setName(response.name);
      setEmail(response.email);
      setAge(response.age.toString());
      alert("개인정보가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error("개인정보 수정 실패:", error);
      alert("개인정보 수정에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>내 정보</h2>
      <Info label="아이디" value={username} />
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
          저장
        </Button>
      </div>
    </div>
  );
};

export default MyInfo;
