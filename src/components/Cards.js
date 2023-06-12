import React from "react";
import "../components/utils.css";

const Cards = ({ cardTitle, cardSubTitle, cardImg, cardText }) => {
  return (
    <div className="card">
      <div className="cardTitle">
        <h3 style={{ display: "flex", gap: "5px" }}>
          {cardTitle}
          <span>{cardSubTitle}</span>
        </h3>
        <img src={cardImg} alt="cardImage" />
      </div>
      <div className="cardText">
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default Cards;