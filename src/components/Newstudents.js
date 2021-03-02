import React from 'react';
import axios from 'axios';

class Newstudents extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      username:"",
      email:""
  }
  }
  

   onNewUsers=(e)=>{
    e.preventDefault();
    axios.get('http://localhost:5000/getnewusers')
    .then(response=>{
      const username=response.data[0].username;
      const email=response.data[0].email;
      console.log(username)
      this.setState({
        username:username,
        email:email
      });
    });
    //this.setState({ newusers });
     // console.log(response.data.username)
    console.log(this.state.newusers)
  }

  render() {
    return(
      <div>
        <p style={{textAlign:"center",fontFamily:"arial",marginTop:"50px",fontSize:100,color:"orange"}}>New Students</p>

        <form onSubmit={this.onNewUsers}>
            <h1>new users</h1>
            
            <button type="submit" className="btn btn-primary mt-3">
              Upload
            </button>
        </form>
       <p>{this.state.username}       {this.state.email}</p> 
        

       
      </div>

    


    
    );

  }
}
export default Newstudents;
