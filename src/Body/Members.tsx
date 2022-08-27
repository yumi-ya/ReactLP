import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

const styles = {
  member1: {
    fontSize: "24px"
  },
  member2: {
    fontSize: "12px"
  }
};

const Members: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Typography sx={styles.member1}>TEAM MEMBERS</Typography>
        <Typography sx={styles.member2}>チームメンバー</Typography>
      </ThemeProvider>
    </Box>
  );
};

export default Members;
