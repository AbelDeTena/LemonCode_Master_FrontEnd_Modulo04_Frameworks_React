import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#540097",
    },
    secondary: {
      main: "#03ddf9",
    },
    error: {
      main: "#fb2d1d",
    },
    background: {
      paper: "#ffffff",
      default: "#fafafa",
    },
    text: {
      primary: "#000000 ",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
});

export function Theme({ children }: any) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
