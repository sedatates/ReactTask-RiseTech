import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AttentionIcon from "@mui/icons-material/ErrorOutline";

import { RiseTechDropdown } from "..";

import styles from "./styles.module.scss";

type Props = {
  isVisible: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
  type: "edit" | "delete";
  onChange?: Function;
  disabled?: boolean;
  editingTodo?: any;
};

const FormDialog: React.FC<Props> = ({
  isVisible,
  handleSubmit,
  handleClose,
  type,
  onChange,
  disabled,
  editingTodo,
}) => {
  return (
    <div>
      <Dialog open={isVisible} onClose={handleClose}>
        <div className={styles.dialog}>
          <DialogTitle sx={{ textAlign: "center" }}>
            <AttentionIcon sx={{ height: 50, width: 50 }} />
          </DialogTitle>
          <DialogContent
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DialogContentText
              sx={{
                padding: 1,
                fontSize: 20,
                width: "100%",
                color: "white",
                marginBottom: 1,
                borderRadius: 1,
                backgroundColor: "GrayText",
              }}
            >
              {editingTodo?.jobName}
            </DialogContentText>

            <DialogContentText sx={{ fontSize: 20, color: "darksalmon" }}>
              You are about to {type === "edit" ? "edit" : "delete"} a job.
            </DialogContentText>

            {type === "edit" ? <RiseTechDropdown onChange={onChange} /> : null}
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "black" }} onClick={handleClose}>
              Cancel
            </Button>
            <Button
              sx={{ width: 100 }}
              className={styles.approveButton}
              onClick={handleSubmit}
              disabled={disabled}
            >
              Approve
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default FormDialog;
