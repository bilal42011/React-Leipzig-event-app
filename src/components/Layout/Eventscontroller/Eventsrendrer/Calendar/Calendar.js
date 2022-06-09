import React from "react";
import { Grid, Typography, CircularProgress } from "@mui/material";
import Calendaritem from "./Calendaritem/Calendaritem";
import { Link } from "react-router-dom";

const Calendar = (props) => {
  let { clubsloaded } = props;
  console.log(clubsloaded);
  let render = (
    <div style={{ width: "100%", textAlign: "center" }}>
      <CircularProgress color="secondary" />
    </div>
  );
  if (clubsloaded == 4)
    render = (
      <Grid container justifyContent="center">
        <Calendaritem {...props} day="Fri"></Calendaritem>
        <Calendaritem {...props} day="Sat"></Calendaritem>
        <Calendaritem {...props} day="Sun"></Calendaritem>
      </Grid>
    );

  return (
    <Grid
      justifyContent="center"
      alignContent="center"
      container
      item
      xs={12}
      sm={6}
      md={6}
      lg={6}
      xl={6}
      sx={{ minHeight: "40vh%" }}
    >
      <Link to="/allevents" target="_blank" style={{ textDecoration: "none" }}>
        <Typography
          color="white"
          fontSize="2rem"
          fontFamily="Oswald"
          textAlign="center"
          gutterBottom
          sx={{
            width: "200px",
            margin: "auto",
            marginBottom: "10%",
            marginTop: "7%",
            backgroundColor: "#2E0249",
            letterSpacing: "3px",
          }}
        >
          Calendar
        </Typography>
        {render}
      </Link>
    </Grid>
  );
};

export default Calendar;
