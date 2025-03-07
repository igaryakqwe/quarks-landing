import { useState, useEffect } from "react";
import styles from "./ResultsStep.module.css";
import Spinner from "../../common/Spinner/Spinner.tsx";
import Popup from "../../common/Popup/Popup.tsx";
import { RESULTS_QUESTIONS } from "../../../constants/questions.ts";
import Select from "../../common/Select/Select.tsx";
import useQuizContext from "../../../hooks/useQuizContext.ts";
import kismiaLogo from "../../../assets/icons/kismia-logo.png";

const ResultsStep = () => {
  const {
    partnerGoals,
    setPartnerGoals,
    emotionalConnection,
    setEmotionalConnection,
    effortCompromise,
    setEffortCompromise,
  } = useQuizContext();
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupStep, setPopupStep] = useState(0);

  const currentQuestion = RESULTS_QUESTIONS[popupStep];

  const values = [partnerGoals, emotionalConnection, effortCompromise];
  const setters = [
    setPartnerGoals,
    setEmotionalConnection,
    setEffortCompromise,
  ];

  const handleOptionChange = (option: string) => {
    setters[popupStep](option);
    handleClosePopup();
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (!showPopup) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }

          const nextProgress = prevProgress + 1;

          // Map progress values to popup steps dynamically
          const progressSteps = [25, 50, 75];
          const nextStep = progressSteps.indexOf(nextProgress);

          if (nextStep !== -1) {
            setShowPopup(true);
            setPopupStep(nextStep);
            clearInterval(interval);
          }

          return nextProgress;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={kismiaLogo} alt="logo" />
      <div className={styles.content}>
        <div>
          <Spinner progress={progress} />
          <p>Analyzing your answers...</p>
        </div>
      </div>
      {showPopup && (
        <Popup>
          <p className={styles.question}>{currentQuestion.question}</p>
          <div className={styles.variants}>
            {currentQuestion.options.map((option) => (
              <Select
                key={option.id}
                id={option.id}
                value={option.value}
                checked={values[popupStep] === option.value}
                onChange={() => handleOptionChange(option.value)}
                className={styles.select}
              >
                <img src={option.icon} alt={option.alt} />
                <span>{option.label}</span>
              </Select>
            ))}
          </div>
        </Popup>
      )}
    </div>
  );
};

export default ResultsStep;
