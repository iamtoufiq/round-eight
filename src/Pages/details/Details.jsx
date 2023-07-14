import React from "react";
import "./Details.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import { useGlobalHook } from "../../context/Contexts";
import PopUp from "../../components/popup/PopUp";
const Details = () => {
  const { data, loading, show, setShow } = useGlobalHook();
  const { ids } = useParams();
  const filterData = data.filter((currData) => {
    return currData?.id == ids;
  });
  console.log("filterData");
  console.log(filterData);
  return (
    <>
      {loading && <h2>Loading..</h2>}
      {!loading && (
        <div className="details">
          <div className="left-detials">
            <h2 className="main-title">{filterData[0]?.title}</h2>
            <h4 className="hosted-by">hoste By:</h4>
            <h4 className="marketing-expert">{filterData[0]?.hostedBy}</h4>
            <img
              src={filterData[0]?.eventThumbnail}
              alt={filterData[0]?.title}
            />
            <h2 className="details-sec">Details :</h2>
            <p className="desc">{filterData[0]?.eventDescription}</p>
            <h2 className="additional-info">additional Information</h2>
            <p className="dress-code">
              dress Code:
              <span>{filterData[0]?.additionalInformation?.dressCode}</span>
            </p>
            <p className="age-restriction">
              ageRestrictions:{" "}
              <span>
                {filterData[0]?.additionalInformation?.ageRestrictions}
              </span>
            </p>
            <h3 className="event-tags">event Tags :</h3>

            {filterData[0]?.eventTags.map((events, ind) => {
              return (
                <button className="marketing-btn" key={ind}>
                  {events}
                </button>
              );
            })}
          </div>
          <div className="right-detials">
            <div className="card-background">
              <div className="timer">
                <AccessTimeIcon />
                <div className="inner">
                  {/* {formattedDate} */}
                  <p>
                    {!!filterData[0]?.eventStartTime && (
                      <>
                        {new Intl.DateTimeFormat("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }).format(new Date(filterData[0]?.eventStartTime))}
                        {" to "}
                      </>
                    )}
                  </p>

                  <p>
                    {!!filterData[0]?.eventEndTime && (
                      <>
                        {new Intl.DateTimeFormat("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }).format(new Date(filterData[0]?.eventEndTime))}
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="timer">
                <LocationOnIcon />
                <div className="inner">
                  <p>{filterData[0]?.location}</p>
                  <p className="to-time">{filterData[0]?.address}</p>
                </div>
              </div>
              <p className="rupes">&#8377; {filterData[0]?.price}</p>
            </div>

            {!!filterData[0]?.speakers.length && (
              <div className="speaker">
                <h2 className="speaker-heading">
                  speakers: ({filterData[0]?.speakers.length})
                </h2>
                <div className="parent-cards">
                  {filterData[0]?.speakers.map((cur, ind) => {
                    return (
                      <div className="speaker-card" key={ind}>
                        <Avatar src={cur?.image} />
                        <h3>{cur?.name}</h3>
                        <p>{cur?.designation}</p>
                      </div>
                    );
                  })}
                </div>

                {!!filterData[0]?.rsvp ? (
                  <button className="rsvp">Already RSVped</button>
                ) : (
                  <button className="rsvp" onClick={() => setShow(true)}>
                    RSVP
                  </button>
                )}
                {/* {!!filterData[0]?.rsvp && <h1>he</h1>} */}
              </div>
            )}
          </div>
          {show && <PopUp idd={filterData[0]?.id} />}
        </div>
      )}
    </>
  );
};

export default Details;
