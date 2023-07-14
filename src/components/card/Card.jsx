import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useGlobalHook } from "../../context/Contexts";

const Card = ({ meetupData }) => {
  const navigate = useNavigate();
  const { selec } = useGlobalHook();

  const handleClick = () => {
    navigate(`/detail/${meetupData.id}`);
  };

  return (
    (selec === "Both" || selec === meetupData?.eventType) && (
      <div className="card" onClick={handleClick}>
        <button className="btn">{meetupData?.eventType}</button>
        <img
          className="card-img-top"
          src={meetupData?.eventThumbnail}
          alt="Card"
        />
        <div className="card-body">
          <p className="card-text">
            {new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(new Date(meetupData?.eventStartTime))}
          </p>

          <h3 className="titile-name">{meetupData?.title}</h3>
        </div>
      </div>
    )
  );
};

export default Card;
