import { Container, Box, Typography } from "@mui/material";
import ThemeBtn from "../components/ThemeBtn";

const styles = {
  copyright: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    zIndex: "10"
  },
  themeBtnWrapper: {
    position: "absolute",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "10"
  }
};

const Footer: React.FC = () => {
  return (
    <Container className="wrapper">
      <Box>
        <div className="wave1 wavy1" />
        <div className="wave2 wavy2" />
        <div className="wave3 wavy3" />
      </Box>
      <Box sx={styles.themeBtnWrapper}>
        <ThemeBtn />
      </Box>
      <Typography sx={styles.copyright}>
        ©uniwork
        <br />
        REACT TEAM
      </Typography>
    </Container>
  );
};

export default Footer;
