import React from "react";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import updatelocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import weekday from "dayjs/plugin/weekday";
import "./Weekenddate.css";

dayjs.extend(updatelocale);
dayjs.updateLocale("en", {
  weekStart: "1",
});
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);

let date = dayjs.tz(dayjs(), "Europe/Berlin");
let thisfriday = date.weekday(4);
let thissunday = date.weekday(6);
console.log(date.format());
const Weekenddate = (porps) => {
  return (
    <div className="weekenddatewrapper">
      <p>
        {thisfriday.format("DD.MM.") + " - " + thissunday.format("DD.MM.YYYY")}
      </p>
    </div>
  );
};
export default Weekenddate;
