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

  onChange: Function;
};

const PureHomePicker: React.FC<Props> = ({ label, onChange }) => {
  const options = boxOptions;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{label}</div>
      <FormControl>
        <Select
          defaultValue={options[2].key}
          className={styles.input}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PureHomePicker;
