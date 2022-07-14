import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChange: Function;
  width: CSSProperties["width"];
  data?: Array<any>;
  type?: string;
};

const RiseTechInput: React.FC<Props> = ({
  title,
  placeholder,
  value,
  onChange,
  width,
  data,
  type,
}) => {
  return (
    <div className={`${width}`}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>

        <input
          className={styles.input}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />

      </div>
    </div>
  );
};

export default RiseTechInput;
