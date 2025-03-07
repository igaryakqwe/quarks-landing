import spinnerIcon from "../../../assets/icons/spinner.svg";
import styles from "./Spinner.module.css";

interface SpinnerProps {
  progress?: number;
}

const Spinner = ({ progress }: SpinnerProps) => {
  return (
    <div className={styles.container}>
      <img src={spinnerIcon} alt="spinner" />
      {progress && <h1>{progress} %</h1>}
    </div>
  );
};

export default Spinner;
