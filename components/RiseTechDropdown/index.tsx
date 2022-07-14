import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import React, { CSSProperties, useEffect, useState } from "react";
import boxOptions from "../../resources/dropdownOptions";

type Props = {
  label: string;
  name: string;
  onChange: Function;
  value: string;
  width: string;
};

const PureHomePicker: React.FC<Props> = ({ label, name, onChange, width }) => {
  const [selected, setSelected] = useState("");
  const options = boxOptions;

  return (
    <FormControl className={width}>
      <Select defaultValue={options[1].key}>
        {options.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PureHomePicker;
