import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import EmailList from './EmailList';
import Mail from './Mail'
import Login from './Login';
import {auth} from './firebase'
import {useEffect} from 'react'
import {useStateValue} from './StateProvider'
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("USER ->", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <>
      {user?( <Router>
    <div className="app">
    <Header/>
    <div className="app_body">
    <Sidebar/>
    <Switch>
      <Route path="/mail/:mailid">
        <Mail/>
      </Route>
      <Route path="/">
        <EmailList/>
      </Route>
    </Switch>
    </div>
  </div>
  </Router>
  ):(<Login/>)}
    </>
  )
}

export default App;
