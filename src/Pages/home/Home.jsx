import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import { useGlobalHook } from "../../context/Contexts";
const Home = () => {
  const { data } = useGlobalHook();
  console.log(data);
  const handleEventChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="top-section">
        <h1>Meetup Events</h1>
        <div className="select">
          <select
            name="events"
            id="event"
            value="mercedes"
            onChange={handleEventChange}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
        </div>
      </div>
      <div className="show-card">
        {data.map((meetupData) => {
          return <Card meetupData={meetupData} key={meetupData?.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
