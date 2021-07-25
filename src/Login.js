import { Button } from '@material-ui/core'
import React from 'react'
import {auth} from './firebase'
import firebase from 'firebase'
import './Login.css'
function Login() {
    const login = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).catch(function(error) {
           alert(error.message);
          });
    }
    return (
        <div className="login">
          <img src="https://cdn.vox-cdn.com/thumbor/_EidO8pPCPbfPSNE8a3DEGVrAM0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt=""/>
          <Button variant="contained" onClick={login}>Login with Google</Button>
        </div>
    )
}

export default Login
