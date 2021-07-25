import { IconButton } from "@material-ui/core";
import { AttachFile, Close, Photo } from "@material-ui/icons";
import React, {useState} from "react";
import { db } from "./firebase";
import "./SendMail.css";
import firebase from 'firebase'
function SendMail() {
    const [To, setTo] = useState("");
    const [Subject, setSub] = useState("");
    const [Body, setBody] = useState("");
  const close = () => {
    var sendmail = document.getElementById("sendmail");
    sendmail.style.display = "none";
  };
  const send = (e) =>{
    e.preventDefault();
    if(To&&Subject&&Body){
      db.collection('mails').add({
        to: To,
        subject: Subject,
        body: Body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    }
  }
  return (
    <div className="sendMail setClose" id="sendmail">
      <div className="sendMail_header">
        <h3>Compose new Email</h3>
        <IconButton onClick={close}>
          <Close className="close" />
        </IconButton>
      </div>
      <form className="sendMail_body">
          <input type="text" placeholder="To" value={To} onChange={(e)=>setTo(e.target.value)}/>
          <input type="text" placeholder="Subject" value={Subject} onChange={(e)=>setSub(e.target.value)}/>
          <input type="text" placeholder="Body" className="input_body" value={Body} onChange={(e)=>setBody(e.target.value)}/>
        <div className="sendMail_footer">
          <button onClick={send}>Send</button>
          <AttachFile />
          <Photo />
        </div>
      </form>
    </div>
  );
}

export default SendMail;
