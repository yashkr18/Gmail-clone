import { IconButton } from "@material-ui/core";
import CheckBox from "@material-ui/core/Checkbox";
import { ChevronLeft, ChevronRight, ExpandMore, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from "@material-ui/icons";
import React,{useState, useEffect} from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import Section from "./Section";
import SendMail from "./SendMail";
function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(()=>{
    db.collection('mails').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setEmails(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})))
    })
  },[])
  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <CheckBox />
          <IconButton>
            <ExpandMore />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight/>
          </IconButton>
          <IconButton>
            <KeyboardHide/>
          </IconButton>
          <IconButton>
            <Settings/>
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
          <Section Icon={Inbox} title="primary" color="red" selected/>
          <Section Icon={People} title="social" color="#1a73eb"/>
          <Section Icon={LocalOffer} title="promotion" color="green"/>
      </div>
      <div className="emailList_list">
          {
            emails.map(email => (
              <EmailRow key = {email.id} title={email.data.to} subject={email.data.subject} description={email.data.body} time={new Date(email.data.timestamp?.toDate()).toLocaleDateString()} id={email.id}/>
            ))
          }
      </div>
      <SendMail/>
    </div>
  );
}

export default EmailList;
