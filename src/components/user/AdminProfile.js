import React from 'react';
//import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBFooter } from 'mdbreact';
import axios from 'axios';
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
//import { toast } from "react-toastify";

class AdminProfile extends React.Component {

    state = {
        isOpen: false,
        newdocument: {
          title: "",
          file: null
        }
      };
      
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    onFileSubmit = e => {
      console.log("inside the on file submit")
      e.preventDefault();
      this.projectFileUpload();
    }

    async projectFileUpload() {
      console.log("inside the on project file upload")
     // try {
         this.docfileUpload(
          this.state.newdocument.file,
          this.state.newdocument.title,
         // this.props.location.state.project.id
        );
        this.setState({
          ...this.state,
          newdocument: {
            title: "",
            file: null
          }
        });
       
     // } catch (error) {
     //   if (error.response && error.response.status === 400) {
     //     this.setState({ ...this.state, uploaderror: error.response.data });
      //  }
     // }
    }

    docfileUpload = (file, title, id) => {
      console.log("inside the on docfile upload")
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
    
      const formData = new FormData();
      formData.append("document", file);
      formData.append("title", title);
      //formData.append("id", id);
      axios.post('http://localhost:5000/upload',formData, config)
      //return http.post(apiEndpoint + "/projectDocument", formData, config);
      console.log(formData.file)
    }

    onChangeInput=(e)=>{
      const newdocument = { ...this.state.newdocument };
        console.log(newdocument)
      newdocument.file = e.target.files[0];
        console.log(newdocument.file)
      this.setState({ ...this.state, newdocument });
     // let files=e.target.files;
        console.log("upload data file")
        console.log(this.state.newdocument.file)
    }

    render(){
      return(
       <div>
        <header>      
          <MDBNavbar color="indigo" dark expand="md">
        
           <MDBNavbarToggler onClick={this.toggleCollapse} />
           <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
           <MDBNavbarNav left>
                       
            <MDBNavItem>
              <MDBNavLink to="/features">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
           </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                  <MDBNavLink to="/">logout</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>
        </header> 
        <form onSubmit={this.onFileSubmit}>
            <h1>model papers</h1>
            <input type="file" name="file" onChange={(e)=>this.onChangeInput(e)} />
            <button type="submit" className="btn btn-primary mt-3">
              Upload
            </button>
        </form>
        
        




       </div>

      );

    }
  

}
export default AdminProfile;