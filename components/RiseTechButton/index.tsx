import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "./styles.module.scss";

import React from "react";

type Props = {
  buttonText: string;
};

const RiseTechButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className={styles.button}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default RiseTechButton;
