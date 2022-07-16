import { CheckCircle } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: Function;
  subtext?: string;
  alertvisible?: boolean;
  successvisible?: boolean;
  successtext?: string;
};

const RiseTechInput: React.FC<Props> = ({
  title,
  alertvisible,
  subtext,
  placeholder,
  value,
  onChange,
  successvisible,
  successtext,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />

      {alertvisible && (
        <Alert
          sx={{
            color: "salmon",
            fontSize: 25,
            alignItems: "center",
            marginBlock: "10px",
            borderRadius: "10px",
          }}
          severity="error"
        >
          {subtext}
        </Alert>
      )}
      {successvisible && (
        <Alert
          icon={<CheckCircle />}
          sx={{
            color: "seagreen",
            fontSize: 25,
            alignItems: "center",
            marginBlock: "10px",
            borderRadius: "10px",
          }}
          severity="success"
        >
          {successtext}
        </Alert>
      )}
    </div>
  );
};

export default RiseTechInput;
