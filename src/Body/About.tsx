import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

const styles = {
  about1: {
    fontSize: "24px"
  },
  about2: {
    fontSize: "12px"
  }
};

const About: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography sx={styles.about1}>ABOUT US</Typography>
        <Typography sx={styles.about2}>このチームについて</Typography>
      </ThemeProvider>
    </>
  );
};

export default About;
