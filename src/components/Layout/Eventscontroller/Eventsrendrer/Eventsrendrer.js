import { Typography, Stack, LinearProgress, Grid } from "@mui/material";
import React from "react";
import Events from "./Events/Events";
import Favouriteevents from "./Favouriteevents/Favouriteevents";
import EventsCalender from "./EventsCalender/EventsCalender";

const Eventrendrer = (props) => {
  let {
    clubstatus,
    clubloaded,
    favouriteevents,
    setfavouriteevents,
    events,
    mjutdata,
    ifzdata,
    distillerydata,
    neueweltdata,
    clubsloaded,
  } = props;
  console.log(mjutdata);
  let render = null;
  if (clubstatus) {
    render = (
      <Stack
        sx={{
          width: "90%",
          borderRadius: "1%",
          minHeight: "20vh",
          margin: "auto",
          marginTop: "2%",
          color: "gray",
          backgroundColor: "#4C3575",
          border: "1px solid purple",
          padding: "2%",
          paddingTop: "5%",
        }}
        spacing={5}
      >
        <LinearProgress color="primary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    );
  } else if (!clubloaded) {
    render = (
      <Typography
        color="white"
        fontFamily="Oswald"
        fontSize="1.8rem"
        width="40%"
        margin="auto"
        textAlign="center"
      >
        Choose Club To See Current Weekend Events
      </Typography>
    );
  } else {
    console.log(events);
    render = (
      <Events
        events={events}
        favouriteevents={favouriteevents}
        setfavouriteevents={setfavouriteevents}
      />
    );
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#371B58",
          marginTop: "4%",
          minHeight: "60vh",
          marginBottom: "6%",
        }}
      >
        <EventsCalender
          mjutdata={mjutdata}
          ifzdata={ifzdata}
          distillerydata={distillerydata}
          neueweltdata={neueweltdata}
          clubsloaded={clubsloaded}
        >
          {render}
        </EventsCalender>
      </div>

      <div
        style={{
          backgroundColor: "#371B58",
          minHeight: "55vh",
          marginTop: "5%",
        }}
      >
        <Typography
          variant="h4"
          fontSize="2.6rem"
          fontFamily="Oswalo"
          textAlign="center"
          color="white"
          gutterBottom
          sx={{
            margin: "auto",
            marginBottom: "3%",
            width: "30%",
            paddingBottom: "0.6%",
            borderBottom: "1px solid white",
            paddingTop: "2%",
          }}
        >
          Favourite Events
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {favouriteevents.length == 0 ? (
            <Typography
              color="white"
              fontFamily="Oswald"
              fontSize="1.8rem"
              width="40%"
              margin="auto"
              marginTop="5%"
              textAlign="center"
            >
              Nothing Added To Favourite Events Yet
            </Typography>
          ) : (
            <Favouriteevents
              favouriteevents={favouriteevents}
            ></Favouriteevents>
          )}
        </Grid>
      </div>
    </>
  );
};

export default Eventrendrer;
