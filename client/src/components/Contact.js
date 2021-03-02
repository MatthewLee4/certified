import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import './Contact.css'; 
import MenuAppBar from './Header'


require('dotenv').config();

export default class Contact extends Component {
    
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
    emailError: false,
  };
// Functions

resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Message Sent",
    });

    setTimeout(() => {
      this.setState({ sent: false });
    }, 3000);
  };

  handleChangeEmail(e) {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({
        email: e.target.value,
      });
      this.setState({ emailError: true });

      if (this.state.email === "") {
        // check if the input is empty
        this.setState({ emailError: false });
      }
    } else {
      this.setState({ email: e.target.value, emailError: false });
    }
  }

  formSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    try {
      await axios.post("/api/v1", data); // THIS IS THE DB URL
      this.setState({ sent: true }, this.resetForm());
    } catch (error) {
      console.log(error);
    }
  };

  render() {

    // const mystyle = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    //   };

    return (
<div className= "formbox">
      <MenuAppBar />

     <div className= "herocontent"> 
       <h1> Need to get in touch?</h1>
     </div>

     <div className= "herocontenttwo"> 
       <h2> We are here to answer all you questions</h2>
       <h2> and we will get in touch as soon as possible.</h2>
     </div>



        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>

        <TextField className= "textfield"
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
       

        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          value={this.state.email}
          onChange={(e) => this.handleChangeEmail(e)}
          error={this.state.emailError}
          required
          type="email"
        />
        <br />
        <br />
       

        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          value={this.state.subject}
          onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        

        <TextField 
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Enter Message"
          variant="outlined"
          multiline
          rowsMax={4}
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />
        <div className="button--container">
          <button type="submit" className="button">
            {this.state.buttonText}
          </button>
        </div>
      </form>
</div>
    //   </div>
    );
  }
}