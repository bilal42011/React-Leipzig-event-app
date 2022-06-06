import React from "react";
import {Grid, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const Calendaritem=(props)=>{
    let {mjutdata,ifzdata,distillerydata,neueweltdata,day}=props;
   console.log(mjutdata);
    let icons=[];
   mjutdata.some(event=>event.weekday==day) && icons.push(<Avatar sx={{bgcolor:"red",color:"white",
   marginBottom:"2px",width:"36px",height:"36px"}}
    variant="square"><Typography fontFamily="Helvetica" variant="subtitle2" fontWeight="bold">mju</Typography></Avatar>);
   ifzdata.some(event=>event.weekday==day) && icons.push(<Avatar sx={{bgcolor:"orange",color:"white"
   ,marginBottom:"2px",width:"36px",height:"36px"}} 
   variant="square"><Typography fontFamily="Helvetica" variant="subtitle2" fontWeight="bold">ifz</Typography></Avatar>);
   distillerydata.some(event=>event.weekday==day) && icons.push(<Avatar sx={{bgcolor:"green",color:"white",
   marginBottom:"2px",width:"36px",height:"36px"}}
    variant="square"><Typography variant="subtitle2" fontFamily="Helvetica" fontWeight="bold">dis</Typography></Avatar>);
   neueweltdata.some(event=>event.weekday==day) && icons.push(<Avatar sx={{bgcolor:"blue",
   color:"white",marginBottom:"2px",width:"36px",height:"36px"}}
    variant="square"><Typography variant="subtitle2" fontWeight="bold" fontFamily="Helvetica">neu</Typography></Avatar>);

let items=icons.map(icon=>{
    return <Grid  item xs={12} sm={12} md={12} lg={12} xl={12}>{icon}</Grid> 
});
console.log(items);
    return <Grid justifyContent="center" container item xs={4} sm={4} md={4} lg={4} xl={4}>
<Grid  item xs={12} sm={12} md={12} lg={12} xl={12} >
    <Typography variant="subtitle1" fontWeight="bolder" fontFamily="Helvetica" gutterBottom>
        <span style={{border:"1px solid white",padding:"4px",color:"white"}}>{day}</span></Typography>
    </Grid>
{items}
    </Grid>

}
export default Calendaritem;