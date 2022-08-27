import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
const ContactButton: React.FC = () => {
  return (
    <Box>
      <Button variant="contained" endIcon={<EmailIcon />}>
        Contact
      </Button>
    </Box>
  );
};

export default ContactButton;
