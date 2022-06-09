import React from "react";
import Weatherlist from "./Weatherlist/Weatherlist";
import Switchlist from "./Switchlist/Switchlist";

const WeatherSwitches = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#371B58",
        marginTop: "6%",
        paddingBottom: "2%",
      }}
    >
      <Weatherlist />
      <Switchlist {...props} />
    </div>
  );
};
export default WeatherSwitches;
