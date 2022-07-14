import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  placeholder?: string;
  value: string;
  onChange: Function;
};

const RiseTechInput: React.FC<Props> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default RiseTechInput;
