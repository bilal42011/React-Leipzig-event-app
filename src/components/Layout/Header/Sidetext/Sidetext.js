import React from "react";
import Typography from "@mui/material/Typography";
import "./sidetext.css";

const Sidetext = (props) => {
  return (
    <div className="sidetextwrapper">
      <Typography
        color="white"
        sx={{ width: "100%", height: "100%", textAlign: "center" }}
        fontFamily="Oswalo"
        letterSpacing="10px"
        fontSize="2.5rem"
      >
        Events
      </Typography>
    </div>
  );
};
export default Sidetext;
