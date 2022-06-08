import { Typography,Stack,LinearProgress,Divider} from "@mui/material";
import React from "react";
import Events from "./Events/Events";
import Favouriteevents from "./Favouriteevents/Favouriteevents";
import EventsCalender from "./EventsCalender/EventsCalender";

const Eventrendrer=(props)=>{
let {clubstatus,clubloaded,favouriteevents,setfavouriteevents,events,mjutdata,ifzdata
    ,distillerydata,neueweltdata,clubsloaded}=props;
    console.log(mjutdata);
    let render=null;
    if(clubstatus){
render= <Stack sx={{ width: '90%',borderRadius:"1%", minHeight:"20vh",margin:"auto",marginTop:"2%", color: 'gray'
,backgroundColor:"#563C5C",border:"1px solid purple",padding:"2%",paddingTop:"5%"}} spacing={5}>
      <LinearProgress  color="primary"/>
      <LinearProgress color="success" />
      <LinearProgress color="inherit"/>
    </Stack>
}
else if(!clubloaded){
render=<Typography color="white" fontWeight="600" fontFamily="Helvetica" fontSize="30px"  width="40%" margin="auto" textAlign="center">
    Choose Club to see current weekend events</Typography>
}
else{
    console.log(events);
    render=<Events events={events} favouriteevents={favouriteevents} setfavouriteevents={setfavouriteevents} />
}

    return <>
<div style={{backgroundColor:"#301934",marginTop:"4%",minHeight:"60vh",marginBottom:"6%"}}>
    <EventsCalender mjutdata={mjutdata}
 ifzdata={ifzdata}
 distillerydata={distillerydata}
 neueweltdata={neueweltdata}
 clubsloaded={clubsloaded}>
        {render}
    </EventsCalender> 
    </div> 
    
      <div style={{backgroundColor:"#301934",minHeight:"55vh",marginTop:"5%"}}>
        <Typography 
        variant="h4"
        fontWeight="700"
        fontSize="2.5rem"
        fontFamily="Helvetica"
        textAlign="center"
        color="white"
          gutterBottom 
          sx={{margin:"auto",marginBottom:"3%",width:"30%",paddingBottom:"0.6%"
          ,borderBottom:"2px solid white",paddingTop:"2%"}}>Favourite Events</Typography>
<Favouriteevents favouriteevents={favouriteevents}></Favouriteevents>
        </div>
        </>
}

export default Eventrendrer;