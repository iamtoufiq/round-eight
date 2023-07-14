import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import { useGlobalHook } from "../../context/Contexts";
// import Spinner from "../../components/spinner/Spinner";
const Home = () => {
  const { data, selec, setselc, loading } = useGlobalHook();

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        // <Spinner />
        <div className="top-section">
          <h1>Meetup Events</h1>
          <div className="select">
            <select
              name="events"
              id="event"
              value={selec}
              onChange={(e) => setselc(e.target.value)}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>
      )}
      <div className="show-card">
        {data.map((meetupData, ind) => {
          return <Card meetupData={meetupData} key={meetupData?.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
