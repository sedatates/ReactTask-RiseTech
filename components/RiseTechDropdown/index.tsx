import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import boxOptions from "../../resources/dropdownOptions";
import styles from "./styles.module.scss";

type Props = {
  label: string;
  value: string;
  onChange: Function;
};

const PureHomePicker: React.FC<Props> = ({ label, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{label}</div>
      <FormControl>
        <Select
          defaultValue={boxOptions[0]}
          className={styles.input}
          onChange={(e) => onChange(e.target.value)}
        >
          {boxOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PureHomePicker;
