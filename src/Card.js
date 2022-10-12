import React from "react";
import "./card.css";
// cardInfo prop that contains the person's name, expiration date, credit card number, and bank name.
function Card(props) {
  return (
    <div className="container card">
      <header className="bank">
        <h1> {props.cardInfo.bank} </h1>
      </header>
      <div className="num">
        {props.cardInfo.num}
      </div>

      <div className="expiry">
        <span className="valid">
          VALID <br />THRU
        </span>
        {props.cardInfo.expiry}
      </div>
      <div className="cardholder">
        {props.cardInfo.cardholder}
      </div>
    </div>
  );
}
export default Card;