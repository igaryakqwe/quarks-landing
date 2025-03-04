import styles from "./Select.module.css";

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const Select = ({
  children,
  checked,
  id,
  className,
  ...props
}: SelectProps) => {
  const checkedClassname = checked ? styles.checked : "";
  const labelClassname = `${styles.label} ${checkedClassname} ${className}`;

  return (
    <>
      <input
        className={styles.input}
        type="radio"
        id={id}
        checked={checked}
        {...props}
      />
      <label className={labelClassname} htmlFor={id}>
        {children}
      </label>
    </>
  );
};

export default Select;
