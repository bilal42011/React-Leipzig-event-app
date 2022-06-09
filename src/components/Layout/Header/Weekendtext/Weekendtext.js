import React from "react";
import "./weekendtext.css";
import Weekenddate from "./Weekenddate/Weekenddate";

const WeekendText = (props) => {
  return (
    <div className="weekendtextwrapper">
      <p
        style={{
          textDecorationLine: "underline",
          textUnderLinePosition: "under",
          marginTop: "-1%",
        }}
      >
        THIS WEEKEND
      </p>
      <Weekenddate />
    </div>
  );
};

export default WeekendText;
