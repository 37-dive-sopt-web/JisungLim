import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";
import { STEPS, type Step } from "@/pages/signup/constants/steps";
import { signUp } from "@/apis/apis";

export const useSignUp = () => {
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

  const handleInfoSubmit = async (name: string, email: string, age: number) => {
    try {
      const response = await signUp({
        username: id,
        password: password,
        name: name,
        email: email,
        age: age,
      });

      console.log("회원가입 성공:", response);
      alert(`${response.name}님 회원가입에 성공했습니다!`);
    } catch (error) {
      alert(`회원가입 실패: ${error}`);
    }
    navigate(ROUTES.LOGIN);
  };

  return {
    step,
    handleReturnClick,
    handleIdSubmit,
    handlePasswordSubmit,
    handleInfoSubmit,
  };
};
