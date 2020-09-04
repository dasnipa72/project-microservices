import React from "react";
import ModelPage  from "../components/modelPage.jsx";

const homePage = ({ user }) => {
  return (
    <div>
      <main role="main" className="text-center inner cover">
        {user ? <a><h2>Welcome {user.username}!</h2> <ModelPage /></a> : <a>
          <h2>Welcome to E-Commerce Fraud Detection</h2><br/><br/>
          <h4>A Brief Overview Of E-Commerce Fraud Detection</h4><br/>
          <p className="lead">
            <ul>
              <li>Buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.</li>
              <li> E-Commerce is undeniably one of the biggest sectors in online business.</li>
              <li>And therefore, Fraud in e-commerce has substantially increased globally over the last few years.​</li>
            </ul></p>
          <h4>Credit Card Fraud Detection</h4><br/>
          <p className="lead">Credit card fraud is a form of identity theft that involves an unauthorized taking of another's credit card information for the purpose of charging purchases to the account or removing funds from it.​</p>
          <h4> Problem Statement​</h4><br/>
          <p className="lead"> The Credit Card Fraud Detection Problem includes modeling past credit card transactions with the knowledge of the ones that turned out to be fraud. This model is then used to identify whether a new transaction is fraudulent or not. Our aim here is to detect 100% of the fraudulent transactions while minimizing the incorrect fraud classifications.​</p>

        </a>
        }
       
      </main>
      
    </div>
  );
};

export default homePage;
