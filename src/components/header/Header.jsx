import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <img
            src="https://www.meetup.com/mu_static/en-US/logo--script.257d0bb1.svg"
            alt="iamge"
          />
        </div>
        <div className="right-header">
          <Button>
            <SearchIcon />
          </Button>

          <input type="text" placeholder="Search by titile and tags" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
