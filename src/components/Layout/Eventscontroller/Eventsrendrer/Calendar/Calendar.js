import React from "react";
import {Grid,Typography,CircularProgress} from "@mui/material";
import Calendaritem from "./Calendaritem/Calendaritem";
import { Link} from "react-router-dom";

const Calendar=(props)=>{
let {clubsloaded}=props;
console.log(clubsloaded);
let render= <div style={{width:"100%",textAlign:"center"}}>
<CircularProgress color="secondary" />
</div>
if(clubsloaded==4)
render=<Grid container justifyContent="center">
<Calendaritem {...props} day="Fri"></Calendaritem>
<Calendaritem {...props} day="Sat"></Calendaritem>
<Calendaritem {...props} day="Sun"></Calendaritem>
</Grid>

return <Grid justifyContent="center" 
 alignContent="center"  container item xs={12} sm={6} md={6} lg={6} xl={6} 
sx={{border:"1px solid balck",minHeight:"40vh%"}}>
     <Link to="/allevents" target="_blank" style={{textDecoration:"none"}}>
<div style={{width:"400px"}}>
<Typography 
    variant="h5"
    color="white"
    fontWeight="700"
    fontSize="1.5rem"
    fontFamily="Helvetica"
     textAlign="center"
      gutterBottom 
      sx={{width:"200px",margin:"auto",marginBottom:"8%",
      backgroundColor:"black",letterSpacing:"3px"}}>Calendar</Typography>

{render}
</div>
</Link>
</Grid>

}

export default Calendar;