import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./styles.css";
import Parallax from "./Parallax";
import Body from "./Body";

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

const App: React.FC = () => {
  // cf. https://mui.com/material-ui/customization/dark-mode/
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Parallax />
          <Body />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
