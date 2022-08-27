import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

const styles = {
  products1: {
    fontSize: "24px"
  },
  products2: {
    fontSize: "12px"
  }
};

const Products: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography sx={styles.products1}>PRODUCTS</Typography>
        <Typography sx={styles.products2}>プロダクト</Typography>
      </ThemeProvider>
    </>
  );
};

export default Products;
