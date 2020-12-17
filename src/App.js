import React from 'react';
import Login from './components/SignIn';
import Register from './components/signUp';
import Home from './components/Home';
//import Features from './components/Features';
import Aboutme from './components/Aboutme';
import AdminProfile from './components/user/AdminProfile';
//import { Router, Route, Switch } from "react-router";
import { BrowserRouter, Route} from 'react-router-dom';

//<Route path="/features" component={Features} />

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
          <div>
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              
              <Route path="/aboutme" component={Aboutme}/>
              <Route path="/Adminprofile" component={AdminProfile}/>
          </div>
      </BrowserRouter> 
      
    </div>
  );
}
}
export default App;



