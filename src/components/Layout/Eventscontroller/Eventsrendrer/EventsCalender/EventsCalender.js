import React from "react";
import { Typography, Grid  } from "@mui/material";
import Calendar from "../Calendar/Calendar";

const EventBox=(props)=>{

    return <Grid container sx={{width:"100%"}}>
    <Calendar {...props}></Calendar>
    <Grid container justifyContent="center" item xs={12} sm={6} md={6} lg={6} xl={6}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Typography 
    variant="h4"
    color="white"
    fontFamily="Helvetica"
    fontWeight="700"
     textAlign="center"
      gutterBottom 
      sx={{paddingTop:"3%",paddingBottom:"0.6%",width:"25%",margin:"auto",marginBottom:"4%",
      borderBottom:"3px solid white"}}>Events</Typography>
      </Grid>
    {props.children}
    </Grid>
    </Grid>
}

export default EventBox;