import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({ error, className, ...props }: InputProps) => {
  const errorClass = error ? styles.error : "";
  const inputClassname = `${styles.input} ${errorClass} ${className}`;

  return <input className={inputClassname} {...props} />;
};

export default Input;
