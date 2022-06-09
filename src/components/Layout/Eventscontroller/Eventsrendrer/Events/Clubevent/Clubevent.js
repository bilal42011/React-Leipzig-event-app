import React from "react";
import { Avatar } from "@mui/material";
import {
  StarRounded,
  FavoriteBorderRounded,
  FavoriteRounded,
  LocationOn,
} from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  CardActions,
} from "@mui/material";

const Clubevent = (props) => {
  let {
    date,
    time,
    weekday,
    title,
    artists,
    id,
    location,
    events,
    favouriteevents,
    setfavouriteevents,
    eventtype,
    addlistner,
  } = props;
  console.log(setfavouriteevents, favouriteevents, events, id);
  let subtitle = "Date" + " : " + date + "  |  Doors:" + time;
  console.log(subtitle);
  let artistlist = null;
  if (artists.length != 0) {
    artistlist = (
      <Grid container>
        {artists.map((artist) => {
          return (
            <Grid item xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <ListItem>
                <ListItemIcon>
                  <StarRounded sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={artist} sx={{ fontFamily: "Oswald" }} />
              </ListItem>
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    artistlist = <Typography color="white">List Coming Soon..</Typography>;
  }

  let favouritelistener = (id, events, favouriteevents, setfavouriteevents) => {
    let alreadyfavourite = false;
    alreadyfavourite = favouriteevents.some((event) => event.id == id);
    if (!alreadyfavourite) {
      let index = events.findIndex((event) => event.id == id);
      setfavouriteevents([...favouriteevents, events[index]]);
    }
  };
  if (!addlistner) {
    favouritelistener = () => {
      console.log("inside favourite event listner");
    };
  }
  let actionicon = <FavoriteBorderRounded sx={{ color: "white" }} />;
  if (eventtype == "favourite") {
    actionicon = <FavoriteRounded sx={{ color: "red" }} />;
  }

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card
        sx={{
          marginBottom: "2px",
          backgroundColor: "#870074",
          color: "white",
          fontFamily: "Oswald",
        }}
        raised
      >
        <CardHeader
          title={title}
          titleTypographyProps={{ fontSize: "25px", fontFamily: "Oswald" }}
          subheaderTypographyProps={{ color: "white", fontFamily: "Oswald" }}
          avatar={
            <Avatar sx={{ bgcolor: "#32174D", color: "white" }}>
              {weekday}
            </Avatar>
          }
          subheader={subtitle}
          action={
            <Button
              onClick={() =>
                favouritelistener(
                  id,
                  events,
                  favouriteevents,
                  setfavouriteevents
                )
              }
            >
              {actionicon}
            </Button>
          }
        />
        <CardContent>
          <Typography fontFamily="Oswald" fontSize="1.2rem" gutterBottom>
            Artists
          </Typography>
          {artistlist}
        </CardContent>
        <CardActions>
          <LocationOn></LocationOn>
          <span
            style={{
              paddingLeft: "1%",
              fontFamily: "Oswald",
              fontSize: "1.1rem",
            }}
          >
            {location}
          </span>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Clubevent;
