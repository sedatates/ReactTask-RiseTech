import React from "react";
import styles from "./styles.module.scss";

type Props = {
  text: string;
  subText?: string;
};

const RiseTechText: React.FC<Props> = ({ text, subText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      {subText && <div className={styles.subText}>{subText}</div>}
    </div>
  );
};

export default RiseTechText;
