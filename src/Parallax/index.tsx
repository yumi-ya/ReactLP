import React from "react";
import { Container } from "@mui/material";

import Fast from "./Fast";
import Slow from "./Slow";
import Stable from "./Stable";

const styles = {
  background: {
    overflow: "hidden",
    bgcolor: "#000",
    maxWidth: "400px",
    width: "400px",
    height: "100vh",
    margin: "auto",
    color: "#fff"
  }
};

const Parallax = () => {
  return (
    <Container sx={styles.background}>
      <Stable />
      <Slow />
      <Fast />
    </Container>
  );
};

export default Parallax;
