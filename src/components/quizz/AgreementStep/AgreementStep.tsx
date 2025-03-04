import ProgressBar from "../../common/ProgressBar/ProgressBar.tsx";
import BackButton from "../../common/BackButton/BackButton.tsx";
import styles from "./AgreementStep.module.css";
import ImageSet from "../../common/ImageSet/ImageSet.tsx";
import womanLeft from "../../../assets/images/woman-left.png";
import womanMiddle from "../../../assets/images/woman-middle.png";
import womanRight from "../../../assets/images/woman-right.png";
import Select from "../../common/Select/Select.tsx";
import crossIcon from "../../../assets/icons/cross.png";
import checkIcon from "../../../assets/icons/check.png";
import useQuizContext from "../../../hooks/useQuizContext.ts";
import { Agreement, QuizSteps } from "../../../types/Quizz.ts";

const AgreementStep = () => {
  const { setStep, isAgree, setIsAgree } = useQuizContext();
  const images: [string, string, string] = [womanLeft, womanMiddle, womanRight];

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
        <ProgressBar value={1} max={3} />
      </div>
      <ImageSet images={images} alt="woman" />
      <div>
        <p className={styles.question}>
          Do you agree to always answer women who take the initiative and
          contact you?
        </p>
        <div className={styles.variants}>
          <Select
            id="no"
            value="no"
            checked={isAgree === "no"}
            onChange={() => handleOptionChange("no")}
            className={styles.select}
          >
            <img src={crossIcon} alt="cross" />
            <span>No</span>
          </Select>
          <Select
            id="yes"
            value="yes"
            checked={isAgree === "yes"}
            onChange={() => handleOptionChange("yes")}
            className={styles.select}
          >
            <img src={checkIcon} alt="check" />
            <span>Yes</span>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default AgreementStep;
