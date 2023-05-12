import React from "react";
import PropTypes from "prop-types";
import MuiCheckbox from "@mui/material/Checkbox";

export default function Checkbox({
  label,
  size,
  color,
  textColor,
  muiColor,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  labelPlacement,
  helperText,
  fontSize,
  ...props
}) {
  return (
    <MuiCheckbox
      label={label}
      size={size}
      color={color}
      textcolor={textColor}
      muicolor={muiColor}
      icon={icon}
      checkedIcon={checkedIcon}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelplacement={labelPlacement}
      helpertext={helperText}
      fontSize={fontSize}
      {...props}
    />
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  color: PropTypes.string,
  muiColor: PropTypes.string,
  checked: PropTypes.bool,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
  helperText: PropTypes.string,
  fontSize: PropTypes.string,
};

Checkbox.defaultProps = {
  label: undefined,
  size: "small",
  color: undefined,
  muiColor: undefined,
  checked: undefined,
  icon: undefined,
  checkedIcon: undefined,
  defaultChecked: undefined,
  required: false,
  disabled: false,
  labelPlacement: undefined,
  helperText: undefined,
  fontSize: undefined,
};
