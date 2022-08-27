import { useContext } from "react";
import { Button } from "@mui/material";

import { ColorModeContext } from "../App";

const styles = {
  ThemeBtn: {
    padding: "7px",
    color: "#fff",
    bgcolor: "#333",
    borderRadius: "0",
    fontFamily: "'Archivo Black',''sansSerif'!important",
    "&:hover": {
      bgcolor: "#333",
      opacity: "0.6"
    }
  }
};

const ThemeBtn: React.FC = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Button sx={styles.ThemeBtn} onClick={colorMode.toggleColorMode}>
      Dark
    </Button>
  );
};

export default ThemeBtn;
