import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AttentionIcon from "@mui/icons-material/ErrorOutline";

import styles from "./styles.module.scss";

type Props = {
  isVisible: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
  type: "edit" | "delete";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormDialog: React.FC<Props> = ({
  isVisible,
  handleSubmit,
  handleClose,
  type,
  onChange,
}) => {
  return (
    <div>
      <Dialog open={isVisible} onClose={handleClose}>
        <div className={styles.dialog}>
          <DialogTitle sx={{ textAlign: "center" }}>
            <AttentionIcon sx={{ height: 50, width: 50 }} />
          </DialogTitle>
          <DialogContent sx={{ textAlign: "center" }}>
            <DialogContentText sx={{ fontSize: 25 }}>
              Are You Sure?
            </DialogContentText>
            {type === "edit" ? (
              <TextField
                onChange={onChange}
                autoFocus
                margin="dense"
                fullWidth
                variant="standard"
              />
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "black" }} onClick={handleClose}>
              Cancel
            </Button>
            <Button
              sx={{ width: 100 }}
              className={styles.approveButton}
              onClick={handleSubmit}
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
