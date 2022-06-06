import React from "react";
import Clubevent from "../Events/Clubevent/Clubevent";
import {Grid} from "@mui/material";

let Favouriteevents=(props)=>{
    let {events}=props
    let renderevents=events.map((event)=>{
    return <Clubevent
    {...props}
    loadedclubdata={events} 
     title={event.title}
     date={event.date}
     time={event.time}
     weekday={event.weekday}
     artists={event.artists}
     id={event.id} 
     eventtype="favourite"
     addlistner={false}
     key={event.id}/>
    });
    return <Grid sx={{margin:"auto",paddingBottom:"2%"}} container  spacing={2}  xs={8} sm={8} md={8} lg={8} xl={8}>
    {renderevents}
</Grid>
}

export default Favouriteevents