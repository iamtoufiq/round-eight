import React, { useState } from "react";
import "./PopUp.css";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalHook } from "../../context/Contexts";
const PopUp = () => {
  const { setShow, handleSubmitPopup, setOriginal } = useGlobalHook();
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="popup">
      <div className="popup-content">
        <h1>Fill your RSVP</h1>
        <p className="info">Fill in Your personal information</p>
        <CloseIcon className="close-btn" onClick={() => setShow(false)} />
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="info">* You have to make the payment at the venue</p>
        <button
          className="button"
          type="submit"
          onClick={() =>
            handleSubmitPopup({
              input: input,
              password,
            })
          }
        >
          RSVP
        </button>
      </div>
    </div>
  );
};

export default PopUp;
