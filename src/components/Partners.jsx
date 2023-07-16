import React from "react";

import googledev from "../assets/googledev.svg";
import ptulogo from "../assets/classic-logo.png";
const Partners = () => {
  return (
    <div className="partners">
      <h2 className="text-center mt-2">Sponsors</h2>
      <p className="text-center mt-2">
        Sponsors dedicated to building remarkable experience!
      </p>

      <div className="googledev">
        <a href="">
          {" "}
          <img
            src={googledev}
            title="Google Developers"
            className="googledevimg"
            width="200px"
            alt=""
          />{" "}
        </a>

        <p className="venue-text">Venue Partner</p>
        <a href="">
          {" "}
          <img
            src={ptulogo}
            title="Google Developers"
            className="googledevimg"
            width="250px"
            alt=""
          />{" "}
        </a>
      </div>
    </div>
  );
};

export default Partners;

