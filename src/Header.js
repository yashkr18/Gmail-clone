import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ExpandMore,
  Help,
  Notifications,
  Search,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'
function Header() {
  const [{ user }] = useStateValue();
  const handleAuth = () => {
      auth.signOut();
  }
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header_center">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ExpandMore />
      </div>
      <div className="header_right">
        <IconButton>
          <Help />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user.photoURL} onClick={handleAuth}/>
      </div>
    </div>
  );
}

export default Header;
