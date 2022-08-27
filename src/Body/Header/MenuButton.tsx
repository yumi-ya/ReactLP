import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const MenuButton: React.FC = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {<MenuIcon />}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>About</MenuItem>
            <MenuItem onClick={popupState.close}>Products</MenuItem>
            <MenuItem onClick={popupState.close}>Members</MenuItem>
            <MenuItem onClick={popupState.close}>Contact</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
export default MenuButton;
