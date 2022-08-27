import { Box } from "@mui/material";

import ContactButton from "./ContactButton";
import MenuButton from "./MenuButton";

const Header: React.FC = () => {
  return (
    <Box sx={{ border: "2px dashed lightblue" }}>
      へっだぁ index
      <ContactButton />
      <MenuButton />
    </Box>
  );
};

export default Header;
