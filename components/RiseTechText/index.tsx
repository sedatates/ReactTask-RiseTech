import React from "react";
import styles from "./styles.module.scss";

type Props = {
  text: string;
  subText?: string;
  style?: any;
};

const RiseTechText: React.FC<Props> = ({ text, subText, style }) => {
  return (
    <div className={styles.container}>
      <div className={style}>{text}</div>
      {subText && <div className={styles.subText}>{subText}</div>}
    </div>
  );
};

export default RiseTechText;
