import { Box } from "@mui/material";

import Header from "./Header";
import FirstView from "./FirstView";
import About from "./About";
import Products from "./Products";
import Members from "./Members";
import Contact from "./Contact";
import Footer from "./Footer";

const Body: React.FC = () => {
  return (
    <>
      <Box sx={{ border: "2px dashed blue" }}>
        ぼでぇ index
        <Header />
        <FirstView />
        <About />
        <Products />
        <Members />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Body;
