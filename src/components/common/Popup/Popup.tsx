import styles from "./Popup.module.css";
import { PropsWithChildren } from "react";

const Popup = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>{children}</div>
    </div>
  );
};

export default Popup;
