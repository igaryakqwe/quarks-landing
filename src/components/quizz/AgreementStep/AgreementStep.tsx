import ProgressBar from "../../common/ProgressBar/ProgressBar.tsx";
import BackButton from "../../common/BackButton/BackButton.tsx";
import styles from "./AgreementStep.module.css";
import ImageSet from "../../common/ImageSet/ImageSet.tsx";
import Select from "../../common/Select/Select.tsx";
import useQuizContext from "../../../hooks/useQuizContext.ts";
import { Agreement, Gender, QuizSteps } from "../../../types/Quizz.ts";
import { AGREEMENT_QUESTIONS } from "../../../constants/questions.ts";

const AgreementStep = () => {
  const { step, setStep, lookingFor, isAgree, setIsAgree } = useQuizContext();

  const currentQuestion = AGREEMENT_QUESTIONS[lookingFor as Gender];
  const images = currentQuestion.images as [string, string, string];

  const handleOptionChange = (option: Agreement) => {
    setIsAgree(option);
    setStep(QuizSteps.Email);
  };

  const handleBack = () => {
    setStep(QuizSteps.SelectGender);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <BackButton onClick={handleBack} />
        <ProgressBar value={step} max={3} />
      </div>
      <ImageSet images={images} alt={lookingFor as Gender} />
      <div>
        <p className={styles.question}>{currentQuestion.question}</p>
        <div className={styles.variants}>
          {currentQuestion.options.map((option) => (
            <Select
              key={option.id}
              id={option.id}
              value={option.value}
              checked={isAgree === option.value}
              onChange={() => handleOptionChange(option.value)}
              className={styles.select}
            >
              <img src={option.icon} alt={option.alt} />
              <span>{option.label}</span>
            </Select>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgreementStep;
