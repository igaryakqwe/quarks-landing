import kismiaLogo from "../../../assets/icons/kismia-logo.png";
import manEmoji from "../../../assets/images/man.png";
import womanEmoji from "../../../assets/images/woman.png";
import styles from "./SelectGenderStep.module.css";
import Select from "../../common/Select/Select.tsx";
import Button from "../../common/Button/Button.tsx";
import useQuizContext from "../../../hooks/useQuizContext.ts";
import { Gender, QuizSteps } from "../../../types/Quizz.ts";

const SelectGenderStep = () => {
  const { setStep, gender, setGender, lookingFor, setLookingFor } =
    useQuizContext();
  const isButtonDisabled = !gender || !lookingFor;

  const handleGenderChange = (gender: Gender) => {
    setGender(gender);
  };

  const handleLookingForChange = (lookingFor: Gender) => {
    setLookingFor(lookingFor);
  };

  const handleStart = () => setStep(QuizSteps.Agreement);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img className={styles.logo} src={kismiaLogo} alt="logo" />
        <h1>The biggest database of dating profiles</h1>
      </div>
      <div className={styles["variants-container"]}>
        <div>
          <p className={styles.paragraph}>I am...</p>
          <div className={styles.variants}>
            <Select
              id="man"
              value="man"
              checked={gender === "man"}
              onChange={() => handleGenderChange("man")}
              className={styles.variant}
            >
              <img className={styles.emoji} src={manEmoji} alt="man emoji" />{" "}
              <span>A man</span>
            </Select>
            <Select
              id="woman"
              value="woman"
              checked={gender === "woman"}
              onChange={() => handleGenderChange("woman")}
              className={styles.variant}
            >
              <img
                className={styles.emoji}
                src={womanEmoji}
                alt="woman emoji"
              />{" "}
              <span>A woman</span>
            </Select>
          </div>
        </div>
        <div>
          <p className={styles.paragraph}>I am looking for...</p>
          <div className={styles.variants}>
            <Select
              id="lookingForMan"
              value="man"
              checked={lookingFor === "man"}
              onChange={() => handleLookingForChange("man")}
              className={styles.variant}
            >
              <img className={styles.emoji} src={manEmoji} alt="man emoji" />{" "}
              <span>A man</span>
            </Select>
            <Select
              id="lookingForWoman"
              value="woman"
              checked={lookingFor === "woman"}
              onChange={() => handleLookingForChange("woman")}
              className={styles.variant}
            >
              <img
                className={styles.emoji}
                src={womanEmoji}
                alt="woman emoji"
              />{" "}
              <span>A woman</span>
            </Select>
          </div>
        </div>
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
