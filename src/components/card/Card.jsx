import React from "react";
import "./Card.css";
const Card = ({ meetupData }) => {
  return (
    <div className="card">
      <button className="btn">{meetupData?.eventType}</button>
      <img
        className="card-img-top"
        src={meetupData?.eventThumbnail}
        alt="Card"
      />
      <div className="card-body">
        <p className="card-text">{meetupData?.eventStartTime}</p>
        <h3 className="titile-name">{meetupData?.title}</h3>
      </div>
    </div>
  );
};

export default Card;
