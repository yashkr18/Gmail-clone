import { Button, IconButton } from "@material-ui/core";
import {
  Add,
  Drafts,
  Duo,
  ExpandMore,
  Mail,
  Person,
  Phone,
  Send,
  Star,
  WatchLater,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
function Sidebar() {
  const compose = () => {
    var sendmail = document.getElementById("sendmail");
    sendmail.style.display = "flex";
  };
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<Add fontSize="large" />}
        onClick={compose}
      >
        Compose
      </Button>
      <SidebarOptions Icon={Mail} title="Inbox" number="54" selected={true} />
      <SidebarOptions Icon={Star} title="Starred" number="54" />
      <SidebarOptions Icon={WatchLater} title="Snoozed" number="54" />
      <SidebarOptions Icon={Send} title="Sent" number="54" />
      <SidebarOptions Icon={Drafts} title="Draft" number="54" />
      <SidebarOptions Icon={ExpandMore} title="More" number="54" />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
