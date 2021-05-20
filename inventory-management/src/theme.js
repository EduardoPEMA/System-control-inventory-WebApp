import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0F0F3E",
      light: "#8FB0EE",
      dark: "#404F6B",
      gradient: "#3764B8",
      paper: "#E1E3DD",
    },
    secondary: {
      main: "#27546B",
      light: "#9DD3EE",
      dark: "#4291B8",
    },

    landing: {
      main: "#203A6B",
    },
  },
});

export default theme;
