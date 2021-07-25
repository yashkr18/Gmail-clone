import { Icon, IconButton } from "@material-ui/core";
import {
  ArrowBack,
  Delete,
  Email,
  MoveToInbox,
  WatchLater,
  Error,
  CheckCircle,
  LabelImportant,
  MoreVert,
  UnfoldMore,
  Print,
  ExitToApp,
} from "@material-ui/icons";
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "./firebase";
import "./Mail.css";
function Mail() {
  const history = useHistory();
  const {mailid} = useParams();
  const [emailData, setEmailData] = useState("");
  useEffect(()=>{
    if(mailid){
      db.collection('mails').doc(mailid).onSnapshot(snapshot => {
        setEmailData(snapshot.data());
      })
    }
  },[mailid]);
  console.log(emailData);
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{emailData.subject}</h2>
          <LabelImportant className="mail_important"></LabelImportant>
          <p>{emailData.to}</p>
          <p className="mail_time">{new Date(emailData?.timestamp?.toDate()).toLocaleDateString()}</p>
        </div>
        <div className="mail_message">
            <p>{emailData.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
