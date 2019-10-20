import React from "react";
import sneakerIcon from "../../../assets/images/sneaker.png";
import mpesaLogo from "../../../assets/images/mpesa-seeklogocom.png";
import locationIcon from "../../../assets/images/location.png";

const StepsToOrder = () => {
  return (
    <div class="steps-to-order">
      <h4>Buy Online We deliver wherever you are</h4>
      <div class="steps">
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
        <h4>Select shoe</h4>
        <p>Browse through collection of shoes.</p>
      </div>
      <div class="steps">
        <img src={mpesaLogo} alt="mpesa" height="70px" />
        <h4>Pay Via Mpesa</h4>
        <p>Paybill: 799643 Account number is shoe code</p>
      </div>
      <div class="steps">
        <img src={locationIcon} alt="location" width="70px" height="70px" />
        <h4>Delivery</h4>
        <p>We deliver right to your doorstep</p>
      </div>
    </div>
  );
};

export default StepsToOrder;
