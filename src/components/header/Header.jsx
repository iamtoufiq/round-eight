import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useGlobalHook } from "../../context/Contexts";
const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useGlobalHook();
  return (
    <>
      <div className="header">
        <div className="left-header">
          <img
            onClick={() => navigate("/")}
            src="https://www.meetup.com/mu_static/en-US/logo--script.257d0bb1.svg"
            alt="iamge"
          />
        </div>
        <div className="right-header">
          <Button>
            <SearchIcon />
          </Button>

          <input
            type="text"
            placeholder="Search by titile and tags"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {!!search && (
            <ClearIcon
              style={{ fontSize: "15px", color: "red", cursor: "pointer" }}
              onClick={() => setSearch("")}
            />
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
