import alertIcon from "../../../assets/icons/alert.svg";
import styles from "./Alert.module.css";

interface AlertProps {
  message: string;
}

const Alert = ({ message }: AlertProps) => {
  return (
    <div className={styles.container}>
      <img src={alertIcon} alt="alert" />
      <p>{message}</p>
    </div>
  );
};

export default Alert;
