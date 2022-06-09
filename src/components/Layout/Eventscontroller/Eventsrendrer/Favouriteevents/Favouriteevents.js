import React from "react";
import Clubevent from "../Events/Clubevent/Clubevent";
import { Grid } from "@mui/material";

let Favouriteevents = (props) => {
  let { favouriteevents } = props;
  let renderevents = favouriteevents.map((event) => {
    return (
      <Clubevent
        title={event.title}
        date={event.date}
        time={event.time}
        weekday={event.weekday}
        artists={event.artists}
        id={event.id}
        location={event.location}
        eventtype="favourite"
        addlistner={false}
        key={event.id}
      />
    );
  });
  return (
    <Grid
      sx={{ margin: "auto", paddingBottom: "2%" }}
      container
      item
      justifyContent="center"
      spacing={2}
      xs={12}
      sm={8}
      md={8}
      lg={8}
      xl={8}
    >
      {renderevents}
    </Grid>
  );
};

export default Favouriteevents;
