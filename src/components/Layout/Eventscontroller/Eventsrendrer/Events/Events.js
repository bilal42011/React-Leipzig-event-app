import React from "react";
import Clubevent from "./Clubevent/Clubevent"; 
import {Grid} from "@mui/material";

const Events=(props)=>{
    let {events}=props
let renderevents=events.map((event)=>{
return <Clubevent
{...props} 
 title={event.title}
 date={event.date}
 time={event.time}
 weekday={event.weekday}
 artists={event.artists}
 id={event.id} 
 eventtype="simple"
 addlistner={true}
 key={event.id}/>
});

return <Grid container item justifyContent="center" columnSpacing={2} xs={12} sm={11} md={11} lg={11} xl={11}>
    {renderevents}
</Grid>
}
export default Events;