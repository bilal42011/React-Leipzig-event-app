import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import updatelocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import weekday from "dayjs/plugin/weekday";
import isSameorAfter from "dayjs/plugin/isSameOrAfter";
import axios from "axios";
import snow from "../../../../../../Assets/snow.png";
import rain from "../../../../../../Assets/rain.png";
import fog from "../../../../../../Assets/fog.png";
import wind from "../../../../../../Assets/wind.png";
import cloudy from "../../../../../../Assets/cloudy.png";
import partlycloudyday from "../../../../../../Assets/partly-cloudy-day.png";
import partlycloudynight from "../../../../../../Assets/partly-cloudy-night.png";
import clearday from "../../../../../../Assets/clear-day.png";
import clearnight from "../../../../../../Assets/clear-night.png";

let iconobj = {
  snow,
  rain,
  fog,
  wind,
  cloudy,
  partlycloudyday,
  partlycloudynight,
  clearday,
  clearnight,
};

dayjs.extend(updatelocale);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);
dayjs.extend(isSameorAfter);

dayjs.updateLocale("en", {
  weekStart: "1",
});

const Weatheritem = (props) => {
  let { day } = props;
  let [item, setitem] = useState("");

  useEffect(() => {
    (async () => {
      let currentdate = dayjs.tz(dayjs(), "Europe/Berlin");
      let weekenddate = null;
      switch (day) {
        case "Fri":
          weekenddate = currentdate.weekday(4);
          break;
        case "Sat":
          weekenddate = currentdate.weekday(5);
          break;
        case "Sun":
          weekenddate = currentdate.weekday(6);
          break;
      }
      console.log(weekenddate);
      console.log(currentdate);

      if (weekenddate.isSameOrAfter(currentdate, "date")) {
        let weatherresponse = await axios({
          method: "get",
          url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=Leipzig,Germany&aggregateHours=24&unitGroup=metric&forcastDays=7&shortColumnNames=true&contentType=json&iconSet=icons1&key=YJ2S9DBZVPWKLZUGT245NPB4V",
        });
        let weatherlist =
          weatherresponse.data.locations["Leipzig,Germany"].values;
        console.log(weatherlist);
        let weatherindex = weatherlist.findIndex((weather) => {
          let weatherdate = dayjs(weather.datetimeStr);
          return weekenddate.isSame(weatherdate, "date");
        });
        let weatheritem = weatherlist[weatherindex];
        let weathericon = weatheritem.icon;
        if (weathericon.includes("-")) {
          weathericon = weathericon.split("-").join("");
        }
        console.log(weathericon);
        let weatherelement = (
          <>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <img
                src={iconobj[weathericon]}
                style={{ width: "110px", height: "95px" }}
              />
            </Grid>
            <Grid container item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography fontFamily="Oswalo">
                  <span style={{ fontSize: "2.5rem" }}>{day}</span>
                  <span style={{ marginLeft: "0.5rem", fontSize: "1.2rem" }}>
                    {weatheritem.temp}°C
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography fontSize="1.3rem" fontFamily="Oswalo">
                  {weatheritem.conditions}
                </Typography>
              </Grid>
              <Grid></Grid>
            </Grid>
          </>
        );
        setitem(weatherelement);
      } else {
        let enddate = currentdate.subtract(1, "day").toISOString();
        let startdate = currentdate.subtract(2, "day").toISOString();
        let weatherresponse = await axios({
          method: "get",
          url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&iconSet=icons1&aggregateHours=24&startDateTime=${startdate}&endDateTime=${enddate}&unitGroup=metric&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location=Leipzig,Germany&key=YJ2S9DBZVPWKLZUGT245NPB4V`,
        });
        let weatherlist =
          weatherresponse.data.locations["Leipzig,Germany"].values;
        console.log(weatherlist);
        let weatherindex = weatherlist.findIndex((weather) => {
          let weatherdate = dayjs(weather.datetimeStr);
          return weekenddate.isSame(weatherdate, "date");
        });
        let weatheritem = weatherlist[weatherindex];
        let weathericon = weatheritem.icon;
        if (weathericon.includes("-")) {
          weathericon = weathericon.split("-").join("");
        }
        console.log(weathericon);
        let weatherelement = (
          <>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <img
                src={iconobj[weathericon]}
                style={{ width: "110px", height: "95px" }}
              />
            </Grid>
            <Grid container item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography fontFamily="Oswalo">
                  <span style={{ fontSize: "2.5rem" }}>{day}</span>
                  <span style={{ marginLeft: "0.5rem", fontSize: "1.2rem" }}>
                    {weatheritem.temp}°C
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography fontSize="1.3rem" fontFamily="Oswalo">
                  {weatheritem.conditions}
                </Typography>
              </Grid>
              <Grid></Grid>
            </Grid>
          </>
        );
        setitem(weatherelement);
      }
    })();
  }, []);

  return (
    <Grid
      container
      item
      justifyContent="space-evenly"
      xs={12}
      sm={5}
      md={5}
      lg={3.5}
      xl={3.5}
      sx={{
        minHeight: "170px",
        marginTop: "2%",
        backgroundColor: "#301934",
        borderRadius: "2.5%",
        color: "white",
        textAlign: "center",
      }}
    >
      {item}
    </Grid>
  );
};
export default Weatheritem;
