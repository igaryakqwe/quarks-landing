import { PropsWithChildren, useState } from "react";
import QuizContext from "./QuizContext.tsx";
import { Agreement, Gender, QuizSteps } from "../../types/Quizz.ts";

const QuizContextProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<QuizSteps>(QuizSteps.SelectGender);
  const [gender, setGender] = useState<Gender | null>(null);
  const [lookingFor, setLookingFor] = useState<Gender | null>(null);
  const [isAgree, setIsAgree] = useState<Agreement | null>(null);
  const [email, setEmail] = useState<string>("");

  return (
    <QuizContext.Provider
      value={{
        step,
        setStep,
        gender,
        setGender,
        lookingFor,
        setLookingFor,
        isAgree,
        setIsAgree,
        email,
        setEmail,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
