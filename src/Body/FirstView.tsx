import { Bloodtype } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

const styles = {
  firstview1: {
    fontSize: "48px"
    // fontWeight: "900"
  },
  firstview2: {
    fontSize: "30px"
    // fontWeight: "600"
  },
  firstview3: {
    fontSize: "12px"
    // fontWeight: "400"
  }
};

const FirstView: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography sx={styles.firstview1}>uniwork</Typography>
        <Typography sx={styles.firstview2}>REACT TEAM</Typography>
        <Typography sx={styles.firstview3}>
          supported by CodeBegin...
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <Typography sx={styles.firstview3}>
          We are React's professional team.
        </Typography>
      </ThemeProvider>
    </>
  );
};

export default FirstView;
