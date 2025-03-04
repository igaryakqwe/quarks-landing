import styles from "./Layout.module.css";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={styles.layout}>{children}</main>;
};

export default Layout;
