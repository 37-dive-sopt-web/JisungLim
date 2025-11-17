import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";
import { STEPS, type Step } from "@/pages/signup/constants/steps";

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

  const handleInfoSubmit = (name: string, email: string, age: number) => {
    // TODO: 회원가입 API 호출
    console.log({ id, password, name, email, age });
    // navigate(ROUTES.LOGIN);
  };

  return {
    step,
    handleReturnClick,
    handleIdSubmit,
    handlePasswordSubmit,
    handleInfoSubmit,
  };
};
