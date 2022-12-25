export const colors = {
  light: {
    main: "#FFFFFF",
  },
  primary: {
    main: "#FFCC21",
    300: "#FFCC21",
    400: "#FF963C",
    500: "#EA6C00",
  },
  secondary: {
    main: "#8FE9D0",
    300: "#8FE9D0",
  },
  dark: {
    main: "#414141",
    500: "#414141",
    600: "#2E2E2E",
  },
  gray: {
    main: "#777777",
    400: "#777777",
  },
};

export type CustomColor = {
  [Key in keyof typeof colors]: typeof colors[Key];
};
