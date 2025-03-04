import QuizContext from "../context/QuizzContext/QuizContext.tsx";
import { useContext } from "react";
import { QuizContextProps } from "../types/Quizz.ts";

const useQuizContext = () => {
  const context = useContext<QuizContextProps | null>(QuizContext);

  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export default useQuizContext;
