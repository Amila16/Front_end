import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBFooter } from 'mdbreact';
import axios from 'axios';





class Register extends React.Component {

constructor(props){
  super(props)
  this.state={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:""
  }
  this.handlesubmit=this.handlesubmit.bind(this);
  this.handleInput=this.handleInput.bind(this);

}

handlesubmit=(e)=>{
   e.preventDefault()
   const data = this.state
   console.log("Data :" , data);
   this.setState({
        firstname :'',
        lastname  :'',
        username :'',
        email:'',
        password:''
  })
   axios.post('http://localhost:5000/new/register',this.state)
   .then(response=>{
         if(response.data === "ok")
           { 
              window.location = "/profile";
           }
        
          console.log(response)})
    .catch(error=>{console.log(error);
    })
   
}

handleInput=(e)=>{
   e.preventDefault()
   this.setState({
     [e.target.name]:e.target.value
   })
}

  render(){

  const {firstname,lastname,username,email,password}=this.state
  return (
    <div className="App">
     
    
     <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={this.handlesubmit}>
            <p className="h4 text-center py-4">SIGNUP</p>
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
              style={{ marginLeft: "426px"}}
            >
              Your first name
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
              value={firstname}
              name="firstname"
              onChange={this.handleInput}
              style={{width: "300px", marginLeft: "420px"}}
            />
            <br />
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
              style={{ marginLeft: "426px"}}
            >
              Your last name
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
              value={lastname}
              name="lastname"
              onChange={this.handleInput}
              style={{width: "300px", marginLeft: "420px"}}
            />
            <br />
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
              style={{ marginLeft: "426px"}}
            >
              Your user name
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
              value={username}
              name="username"
              onChange={this.handleInput}
              style={{width: "300px", marginLeft: "420px"}}
            />
            <br />
            <label
              htmlFor="defaultFormCardEmailEx"
              className="grey-text font-weight-light"
              style={{ marginLeft: "426px"}}
            >
              Your email
            </label>
            <input
              type="email"
              id="defaultFormCardEmailEx"
              className="form-control"
              value={email}
              name="email"
              onChange={this.handleInput}
              style={{width: "300px", marginLeft: "420px"}}
            />
            <br />
            <label
              htmlFor="defaultFormCardEmailEx"
              className="grey-text font-weight-light"
              style={{ marginLeft: "426px"}}
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormCardPasswordEx"
              className="form-control"
              value={password}
              name="password"
              onChange={this.handleInput}
              style={{width: "300px", marginLeft: "420px"}}
            />
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About Us</h5>
            <p>
              contact us 077-09560222
        
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>
  );
}
}
export default Register;




