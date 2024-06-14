import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Define custom colors
const colors = {
  primary: {
    turquoise: "#5ACCCC",
    white: "#FFFFFF",
    steelBlue: "#335C6E",
    yellow: "#FABD33",
  },
  secondary: {
    turquoiseLight: "#CFFAFA",
    turquoiseDark1: "#53C2C2",
    turquoiseDark2: "#28B8B8",
    orangeRed: "#F76434",
    orangePastel: "#FFE6DC",
    teal: "#4AA088",
    yellowDark: "#FAAD00",
  },
};

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: grey[50],
    },
    primary: {
      main: colors.primary.turquoise,
      contrastText: colors.primary.white,
    },
    secondary: {
      main: colors.secondary.turquoiseLight,
    },

    error: { main: colors.secondary.orangeRed },
    text: {
      primary: colors.primary.steelBlue,
    },
  },
});

export default theme;
