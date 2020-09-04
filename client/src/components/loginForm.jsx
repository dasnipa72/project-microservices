import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
// import '../assets/css/login.css';

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
    try {
      await this.props.loginUser(this.state.data);
      const errorMsg = this.props.errors;
      console.log(errorMsg);
      if (errorMsg) {
        let errors = {};
        errors.password = errorMsg;
        this.setState({ errors });
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <div className="main-form">
        <div className="container-row">
          {/* <div className="col-6"> */}
           
            <form onSubmit={this.handleSubmit}>
              <h1><center> Login</center></h1>
              {this.renderInput("email", "Email", "text")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
              <br /> <br/>
              <p>  Forgot your password?
              <br />
              <NavLink to="users/reset_password">Reset Password here. </NavLink>
            </p>
            </form>
            
          </div>
        {/* //   <div className="col-6" />
        // </div> */}
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
