import kismiaLogo from "../../../assets/icons/kismia-logo.png";
import styles from "./SelectGenderStep.module.css";
import Select from "../../common/Select/Select.tsx";
import Button from "../../common/Button/Button.tsx";
import useQuizContext from "../../../hooks/useQuizContext.ts";
import { Gender, QuizSteps } from "../../../types/Quizz.ts";
import { isMan } from "../../../utils/helpers.ts";
import {
  GENDER_QUESTIONS,
  GENDER_OPTIONS,
} from "../../../constants/questions.ts";

const SelectGenderStep = () => {
  const { setStep, gender, setGender, lookingFor, setLookingFor } =
    useQuizContext();
  const isButtonDisabled = !gender || !lookingFor;

  const handleGenderChange = (gender: Gender) => {
    setGender(gender);
    const oppositeGender: Gender = isMan(gender)
      ? GENDER_OPTIONS.WOMAN
      : GENDER_OPTIONS.MAN;
    setLookingFor(oppositeGender);
  };

  const handleLookingForChange = (lookingFor: Gender) => {
    setLookingFor(lookingFor);
  };

  const handleStart = () => setStep(QuizSteps.Agreement);

  const getSelectedValue = (questionId: string) => {
    return questionId === "gender" ? gender : lookingFor;
  };

  const handleChange = (questionId: string, value: Gender) => {
    return questionId === "gender"
      ? handleGenderChange(value)
      : handleLookingForChange(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img className={styles.logo} src={kismiaLogo} alt="logo" />
        <h1>The biggest database of dating profiles</h1>
      </div>
      <div className={styles["variants-container"]}>
        {GENDER_QUESTIONS.map((questionGroup) => (
          <div key={questionGroup.id}>
            <p className={styles.paragraph}>{questionGroup.question}</p>
            <div className={styles.variants}>
              {questionGroup.options.map((option) => (
                <Select
                  key={option.id}
                  id={option.id}
                  value={option.value}
                  checked={getSelectedValue(questionGroup.id) === option.value}
                  onChange={() => handleChange(questionGroup.id, option.value)}
                  className={styles.variant}
                >
                  <img
                    className={styles.emoji}
                    src={option.icon}
                    alt={option.alt}
                  />{" "}
                  <span>{option.label}</span>
                </Select>
              ))}
            </div>
          </div>
        ))}
        <p className={styles.message}>
          You can always change who you want to meet
        </p>
        <Button onClick={handleStart} disabled={isButtonDisabled}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default SelectGenderStep;
