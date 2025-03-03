import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = ({ error, ...props }: InputProps) => {
  const errorClass = error ? styles.error : "";
  const className = `${styles.input} ${errorClass}`;

  return <input className={className} {...props} />;
};

export default Input;
