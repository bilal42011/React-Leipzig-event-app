import React from "react";
import { Grid, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const Calendaritem = (props) => {
  let { mjutdata, ifzdata, distillerydata, neueweltdata, day } = props;
  console.log(mjutdata);
  let icons = [];
  mjutdata.some((event) => event.weekday == day) &&
    icons.push(
      <Avatar
        sx={{
          bgcolor: "#3E065F",
          color: "white",
          marginBottom: "2px",
          width: "38px",
          height: "38px",
          borderRadius: "13%",
        }}
        variant="square"
      >
        <Typography fontFamily="Oswald" fontSize="1rem" variant="subtitle2">
          mju
        </Typography>
      </Avatar>
    );
  ifzdata.some((event) => event.weekday == day) &&
    icons.push(
      <Avatar
        sx={{
          bgcolor: "#7D1E6A",
          color: "white",
          marginBottom: "2px",
          width: "38px",
          height: "38px",
          borderRadius: "13%",
        }}
        variant="square"
      >
        <Typography fontFamily="Oswald" fontSize="1rem" variant="subtitle2">
          ifz
        </Typography>
      </Avatar>
    );
  distillerydata.some((event) => event.weekday == day) &&
    icons.push(
      <Avatar
        sx={{
          bgcolor: "#700B97",
          color: "white",
          marginBottom: "2px",
          width: "38px",
          height: "38px",
          borderRadius: "13%",
        }}
        variant="square"
      >
        <Typography variant="subtitle2" fontSize="1rem" fontFamily="Oswald">
          dis
        </Typography>
      </Avatar>
    );
  neueweltdata.some((event) => event.weekday == day) &&
    icons.push(
      <Avatar
        sx={{
          bgcolor: "#8E05C2",
          color: "white",
          marginBottom: "2px",
          width: "38px",
          height: "38px",
          borderRadius: "13%",
        }}
        variant="square"
      >
        <Typography variant="subtitle2" fontSize="1rem" fontFamily="Oswald">
          neu
        </Typography>
      </Avatar>
    );

  let items = icons.map((icon, index) => {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={index}>
        {icon}
      </Grid>
    );
  });
  console.log(items);
  return (
    <Grid
      justifyContent="center"
      container
      item
      xs={4}
      sm={4}
      md={4}
      lg={4}
      xl={4}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="subtitle1" fontFamily="Oswald" gutterBottom>
          <span
            style={{
              border: "1px solid white",
              padding: "6px",
              color: "white",
              borderRadius: "13%",
              fontSize: "1.2rem",
            }}
          >
            {day}
          </span>
        </Typography>
      </Grid>
      {items}
    </Grid>
  );
};
export default Calendaritem;
