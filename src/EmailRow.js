import React from "react";
import "./EmailRow.css";
import CheckBox from "@material-ui/core/Checkbox";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
  return (
    <div className="emailRow" onClick={()=> history.push(`/mail/${id}`)}>
      <div className="emailRow_options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>{subject}
        <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
