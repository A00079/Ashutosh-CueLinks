import React from "react";
import { COLORS } from "../../theme/mainTheme";

const ThemeButton = ({ children, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-full py-2 text-center font-bold capitalize"
      style={{
        border: `1px solid ${COLORS.primary}`,
        backgroundColor: "#fff4ee",
        color: COLORS.secondary,
      }}
    >
      {children}
    </div>
  );
};

export default ThemeButton;
