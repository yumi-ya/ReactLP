import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

const styles = {
  Contact1: {
    fontSize: "24px"
  },
  Contact2: {
    fontSize: "12px"
  }
};

const Contact: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography sx={styles.Contact1}>CONTACT</Typography>
        <Typography sx={styles.Contact2}>お問い合わせ</Typography>
      </ThemeProvider>
    </>
  );
};

export default Contact;
