import React from "react";
import  Typography  from "@mui/material/Typography";
import dayjs from "dayjs";
import updatelocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(updatelocale);
dayjs.updateLocale("en",{
    weekStart:"1",
});
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);

let date=dayjs.tz(dayjs(),"Europe/Berlin");
let thisfriday=date.weekday(4);
let thissunday=date.weekday(6);
console.log(date.format());
const Weekenddate=(porps)=>{

return <>
<Typography variant="h2" align="center" color="orange"  fontFamily="cursive" fontWeight="900" fontSize="3rem"
    textAlign="center">
    {thisfriday.format("DD.MM.")+" - "+thissunday.format("DD.MM.YYYY")}
        </Typography>
</>
}
export default Weekenddate;