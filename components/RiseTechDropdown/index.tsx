import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import boxOptions from "../../resources/dropdownOptions";
import filterOptions from "../../resources/filterOptions";
import styles from "./styles.module.scss";

type Props = {
  label?: string;
  value?: string;
  onChange?: Function;
  type?: string;
};

const PureHomePicker: React.FC<Props> = ({ label, onChange, type }) => {
  const options = type === "box" ? boxOptions : filterOptions;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{label}</div>
      <FormControl>
        <Select
          defaultValue={options[0]}
          className={styles.input}
          onChange={(e) => onChange?.(e.target.value)}
        >
          {options.map((option, index) => (
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
