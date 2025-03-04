import styles from "./EmailStep.module.css";
import BackButton from "../../common/BackButton/BackButton.tsx";
import ProgressBar from "../../common/ProgressBar/ProgressBar.tsx";
import { QuizSteps } from "../../../types/Quizz.ts";
import useQuizContext from "../../../hooks/useQuizContext.ts";
import Input from "../../common/Input/Input.tsx";
import Alert from "../../common/Alert/Alert.tsx";
import Button from "../../common/Button/Button.tsx";
import { isEmail } from "../../../utils/validation.ts";
import { useEffect, useRef } from "react";

const EmailStep = () => {
  const { step, setStep, email, setEmail } = useQuizContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const isButtonDisabled = !email || !isEmail(email);

  const handleBack = () => {
    setStep(QuizSteps.Agreement);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContinue = () => {
    setStep(QuizSteps.SelectGender);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <BackButton onClick={handleBack} />
          <ProgressBar value={step} max={3} />
        </div>
        <div>
          <h2>Enter your email</h2>
          <p className={styles.description}>To get access to the profiles</p>
        </div>
        <div>
          <Input
            ref={inputRef}
            className={styles.input}
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
          />
          <Alert message="This information will be used for the registration process only and won't be visible to other users." />
        </div>
      </div>
      <Button onClick={handleContinue} disabled={isButtonDisabled}>
        Continue
      </Button>
    </div>
  );
};

export default EmailStep;
