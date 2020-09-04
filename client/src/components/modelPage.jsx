// import React from "react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { predictModel } from "../actions/authActions";
import '../assets/css/modelpage.css';

class ModelPage extends Form {
    state = {
        data: {
            AverageAmount_transaction_day: "",
            Transaction_amount: "",
            IsDeclined:"",
            TotalNumberOfDeclines_day:"",
            isForeignTransaction:"",
            isHighRiskCountry:"",
            Daily_chargeback_avg_amt:"",
            six_month_avg_chbk_amt:"",
            six_month_chbk_freq:""
       },
        errors: {},
        Predicted_Output:"",
      };
      schema = {
        AverageAmount_transaction_day: Joi.string()
          .required()
          .label("AverageAmount_transaction_day"),
        Transaction_amount: Joi.string()
          .required()
          .label("Transaction_amount"),
        IsDeclined: Joi.string()
          .required()
          .label("IsDeclined"),
        TotalNumberOfDeclines_day: Joi.string()
          .required()
          .label("TotalNumberOfDeclines_day"),
        isForeignTransaction: Joi.string()
          .required()
          .label("isForeignTransaction"),
        isHighRiskCountry: Joi.string()
          .required()
          .label("isHighRiskCountry"),
        Daily_chargeback_avg_amt: Joi.string()
          .required()
          .label("Daily_chargeback_avg_amt"),
        six_month_avg_chbk_amt: Joi.string()
          .required()
          .label("six_month_avg_chbk_amt"),
        six_month_chbk_freq: Joi.string()
          .required()
          .label("six_month_chbk_freq")
      };

      doSubmit = async () => {
        // Call the server
        try {
          await this.props.predictModel(this.state.data);
          const errorMsg = this.props.errors;
          console.log(errorMsg);
          if (errorMsg) {
            let errors = {};
            errors.isForeignTransaction = errorMsg;
            this.setState({ errors });
          }
        } catch (ex) {
          console.log(ex);
        }
      };

   render(){
       return(
        <div className="main-form">
        <div className="container-row">
          {/* <div className="col-6"> */}
           
            <form onSubmit={this.handleSubmit}>
              <h1><center> Credit Card Fraud Detection </center></h1>
              {this.renderInput("AverageAmount_transaction_day", "AverageAmount_transaction_day", "text")}
              {this.renderInput("Transaction_amount", "Transaction_amount", "text")}
              {this.renderInput("IsDeclined", "IsDeclined", "text")}
              {this.renderInput("TotalNumberOfDeclines_day", "TotalNumberOfDeclines_day", "text")}
              {this.renderInput("isForeignTransaction", "isForeignTransaction", "text")}
              {this.renderInput("isHighRiskCountry", "isHighRiskCountry", "text")}
              {this.renderInput("Daily_chargeback_avg_amt", "Daily_chargeback_avg_amt", "text")}
              {this.renderInput("six_month_avg_chbk_amt", "six_month_avg_chbk_amt", "text")}
              {this.renderInput("six_month_chbk_freq", "six_month_chbk_freq", "text")}
              {this.renderButton("Predict")}
              <br /> <br/>
              { this.Predicted_Output }
            </form>
            
          </div>
      </div>

       );
   }
}
// export default modelPage;
ModelPage.propTypes = {
    predictModel: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.string.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { predictModel }
  )(ModelPage);