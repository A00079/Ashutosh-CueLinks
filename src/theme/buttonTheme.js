const outline = " ";

export const ButtonType = {
  primary: `bg-blue-700 hover:bg-blue-800  text-white font-bold rounded ${outline}`,
  secondary: `bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded ${outline}`,
  secondaryLight: `bg-yellow-100 text-white font-bold rounded ${outline}`,
  info: `bg-white hover:bg-gray-700 hover:text-gray-100 text-gray-700 font-bold rounded ${outline}`,
  danger: `bg-red-600 hover:bg-red-700 text-white font-bold rounded ${outline}`,
};

export const ButtonSize = {
  sm: "py-1.5 px-2.5 text-xs",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-5 text-lg",
};
