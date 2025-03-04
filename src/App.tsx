import Layout from "./components/Layout/Layout.tsx";
import SelectGenderStep from "./components/quizz/SelectGenderStep/SelectGenderStep.tsx";
import AgreementStep from "./components/quizz/AgreementStep/AgreementStep.tsx";
import useQuizContext from "./hooks/useQuizContext.ts";
import EmailStep from "./components/quizz/EmailStep/EmailStep.tsx";

function App() {
  const { step } = useQuizContext();
  const QuizSteps = [<SelectGenderStep />, <AgreementStep />, <EmailStep />];

  return <Layout>{QuizSteps[step]}</Layout>;
}

export default App;
