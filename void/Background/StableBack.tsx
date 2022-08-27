// import { Box } from "@mui/material";

// const StableBack: React.FC = () => {
//   return <Box>StableBack</Box>;
// };

// export default StableBack;

import { Container, Box, Button } from "@mui/material";
import Members from "../icons/ReactIcon.tsx";

const styles = {
  background: {
    bgcolor: "#000",
    width: "100vw",
    height: "100vh"
  },
  icon1: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "50px"
  },
  icon2: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "200px",
    right: "20px",
    width: "100px"
  },
  icon3: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "850px",
    left: "20px",
    width: "70px"
  },
  icon4: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "400px",
    left: "70px",
    width: "50px"
  },
  icon5: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "1000px",
    left: "20px",
    width: "100px"
  }
};

const StableBack: React.FC = () => {
  return (
    <Container sx={styles.background}>
      <Box sx={styles.icon1}>
        <Members />
      </Box>
      <Box sx={styles.icon2}>
        <Members />
      </Box>
      <Box sx={styles.icon3}>
        <Members />
      </Box>
      <Box sx={styles.icon4}>
        <Members />
      </Box>
      <Box sx={styles.icon5}>
        <Members />
      </Box>
    </Container>
  );
};

export default StableBack;
