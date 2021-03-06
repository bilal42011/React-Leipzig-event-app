import React from "react";
import { Grid, Typography } from "@mui/material";
import Weatheritem from "./Weatheritem/Weatheritem";

// rgb(199, 211, 212)
const Weatherlist = (props) => {
  return (
    <div>
      <Typography
        fontFamily="Oswalo"
        fontSize="2.7rem"
        textAlign="center"
        sx={{
          margin: "auto",
          paddingTop: "1.5%",
          paddingBottom: "0.3%",
          borderBottom: "1px solid white",
          color: "white",
          width: "20%",
        }}
      >
        Weather
      </Typography>
      <Grid container justifyContent="space-evenly" sx={{ marginTop: "3%" }}>
        <Weatheritem day="Fri"></Weatheritem>
        <Weatheritem day="Sat"></Weatheritem>
        <Weatheritem day="Sun"></Weatheritem>
      </Grid>
    </div>
  );
};
export default Weatherlist;
