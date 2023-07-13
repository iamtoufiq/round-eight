import React from "react";
import "./Details.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";

const Details = () => {
  const { ids } = useParams();
  console.log(ids);

  return (
    <div className="details">
      <div className="left-detials">
        <h2 className="main-title">Marketing Seminar</h2>
        <h4 className="hosted-by">hoste By:</h4>
        <h4 className="marketing-expert">Marketing Experts</h4>
        <img
          src="https://i.postimg.cc/yxTqcNXG/pexels-photo-1239288.jpg"
          alt=""
        />
        <h2 className="details-sec">Details :</h2>
        <p className="desc">
          Stay ahead of the game in the dynamic field of digital marketing by
          attending the Marketing Seminar organized by Marketing Experts. This
          offline seminar will be held on August 15th from 10:00 AM to 12:00 PM
          at Marketing City, situated at 789 Marketing Avenue, City. Join
          industry leaders Sarah Johnson, Marketing Manager, and Michael Brown,
          SEO Specialist, as they delve into the latest trends and strategies in
          digital marketing. The seminar is open to individuals aged 18 and
          above and requires a ticket priced at ₹3,000. The dress code for the
          event is smart casual
        </p>
        <h2 className="additional-info">additional Information</h2>
        <p className="dress-code">
          dress Code: <span>Smart casual</span>
        </p>
        <p className="age-restriction">
          ageRestrictions: <span>18 and above</span>
        </p>
        <h3 className="event-tags">event Tags :</h3>

        <button className="marketing-btn">marketing</button>
        <button className="marketing-btn">marketing</button>
      </div>
      <div className="right-detials">
        <div className="card-background">
          <div className="timer">
            <AccessTimeIcon />
            <div className="inner">
              <p>2023-06-25T14:00:00 to </p>
              <p className="to-time">2023-06-25T14:00:00</p>
            </div>
          </div>
          <div className="timer">
            <LocationOnIcon />
            <div className="inner">
              <p>Marketing City</p>
              <p className="to-time">789 Marketing Avenue, City</p>
            </div>
          </div>
          <p className="rupes">&#8377; 300</p>
        </div>

        <div className="speaker">
          <h2 className="speaker-heading">speakers: (2)</h2>
          <div className="parent-cards">
            <div className="speaker-card">
              <Avatar>AB</Avatar>
              <h3>Saraah jshsonss</h3>
              <p>Marketing Manger</p>
            </div>
            <div className="speaker-card">
              <Avatar>AB</Avatar>
              <h3>Saraah jshsonss</h3>
              <p>Marketing Manger</p>
            </div>
          </div>
          <button className="rsvp">RSVP</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
