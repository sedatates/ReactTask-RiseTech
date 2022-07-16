import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import styles from "./styles.module.scss";

import React from "react";

type Props = {
  buttonText?: string;
  onClick: () => void;
  type: "edit" | "contained" | "outlined" | "delete";
};

const RiseTechButton: React.FC<Props> = ({ buttonText, onClick, type }) => {
  return (
    <div className={styles.container}>
      {type === "edit" || type === "delete" ? (
        <IconButton onClick={onClick}>
          {type === "edit" ? <EditIcon /> : <DeleteIcon />}
        </IconButton>
      ) : (
        <Button
          onClick={onClick}
          variant={type}
          startIcon={<AddIcon />}
          className={styles.button}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default RiseTechButton;
