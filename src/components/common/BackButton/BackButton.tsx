import chevronIcon from "../../../assets/icons/chevron.svg";
import styles from "./BackButton.module.css";

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={chevronIcon} alt="back" />
    </button>
  );
};

export default BackButton;
