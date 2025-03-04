import { createContext } from "react";
import { QuizContextProps } from "../../types/Quizz.ts";

const QuizContext = createContext<QuizContextProps | null>(null);

export default QuizContext;
