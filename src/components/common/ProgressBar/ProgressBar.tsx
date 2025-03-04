import styles from "./ProgressBar.module.css";

interface ProgressProps {
  value: number;
  max: number;
  color?: string;
}

const ProgressBar = ({ value, max, color = "#FF5247" }: ProgressProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className={styles["progress-container"]}>
      <div
        className={styles["progress-fill"]}
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar;
