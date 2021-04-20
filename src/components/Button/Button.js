import React from "react";
import { ButtonSize, ButtonType } from "../../theme/buttonTheme";

const Button = ({
  size,
  color,
  children,
  bold,
  animate,
  capitalize,
  classes,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${ButtonType[color]} ${ButtonSize[size]}  ${
        animate && `animate duration-500 ease-in-out rounded-lg`
      } ${capitalize && `capitalize`} ${
        bold && `font-semibold`
      } ${classes} focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default Button;
