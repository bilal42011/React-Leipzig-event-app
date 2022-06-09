import React from "react";
import WeekendText from "./Weekendtext/Weekendtext";
import Sidetext from "./Sidetext/Sidetext";
import "./header.css";

const Header = (props) => {
  return (
    <div className="headerwrapper">
      <Sidetext></Sidetext>
      <WeekendText />
    </div>
  );
};
export default Header;
