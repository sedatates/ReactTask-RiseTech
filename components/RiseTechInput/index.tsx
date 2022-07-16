import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  placeholder?: string;
  value: string;
  onChange: Function;
  subtext?: string;
  alertvisible?: boolean;
};

const RiseTechInput: React.FC<Props> = ({
  title,
  alertvisible,
  subtext,
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
     
        {alertvisible && <div className="alertText">{subtext}</div>}
      
    </div>
  );
};

export default RiseTechInput;
