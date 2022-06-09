import React from "react";
import { Grid } from "@mui/material";
import Clubevent from "../../Eventscontroller/Eventsrendrer/Events/Clubevent/Clubevent";

const Allevents = (props) => {
  let { allevents } = props;

  let renderevents = allevents.map((event) => {
    return (
      <Clubevent
        title={event.title}
        date={event.date}
        time={event.time}
        weekday={event.weekday}
        artists={event.artists}
        id={event.id}
        location={event.location}
        eventtype="allevents"
        addlistner={false}
        key={event.id}
      />
    );
  });

  return (
    <Grid
      sx={{ margin: "auto", paddingBottom: "2%" }}
      container
      spacing={2}
      xs={8}
      sm={8}
      md={8}
      lg={8}
      xl={8}
    >
      {renderevents}
    </Grid>
  );
};

export default Allevents;
