import styles from "./Select.module.css";

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const Select = ({ children, checked, id, ...props }: SelectProps) => {
  const checkedClassname = checked ? styles.checked : "";
  const className = `${styles.label} ${checkedClassname}`;

  return (
    <>
      <input
        className={styles.input}
        type="radio"
        id={id}
        checked={checked}
        {...props}
      />
      <label className={className} htmlFor={id}>
        {children}
      </label>
    </>
  );
};

export default Select;
