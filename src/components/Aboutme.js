import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';

class Aboutme extends React.Component {
  
      state = {
        file: null
      }
  
  
    onChangeHandler(e){
      console.log("onchangehandler")
      e.preventDefault()
      this.setState({
        [this.state.file]: e.target.files[0]
        
      })
     // console.log(this.state.file)
      console.log(e.target.files[0])
    }

    onClickHandler(e){
     // e.preventDefault();
     console.log("onclickhandler")
      const data = new FormData() 
      data.append('file',this.state.file)
      console.log(data);
      
      const config = {
        headers : {
          'content-type': 'multipart/form-data'
        }
      }
      axios.post("http://localhost:5000/upload",data, config)
      .then(res => { // then print response status
         console.log(data)
      })

    }

    render() {
      return(
        <div>
          
           <MDBContainer>
            <MDBRow >
             <MDBCol md="12">
            <form onSubmit={this.onClickHandler}>
            
               <input type="file" name="file" onChange={(e)=>this.onChangeHandler(e)} style={{width: "300px", marginLeft: "420px",marginBottom: "100px"} }  />
               <button type="submit" className="btn btn-success btn-block" >Upload</button>
            
            </form>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>


      );
    }
}
export default Aboutme;