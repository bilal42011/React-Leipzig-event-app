import React from "react";
import { Avatar } from "@mui/material";
import {StarRounded,FavoriteBorderRounded,FavoriteRounded,LocationOn} from "@mui/icons-material"
import {Card , CardHeader, CardContent, Grid, Button,Typography,
    List,ListItem,ListItemIcon,ListItemText,ListSubheader,CardActions} from "@mui/material";


const Clubevent=(props)=>{

let {date,time,weekday,title,artists,id,location,events,favouriteevents,setfavouriteevents,
    eventtype,addlistner}=props;
console.log(setfavouriteevents,favouriteevents,events,id);
let subtitle="Date"+", "+ date+"  |  Doors:"+ time;
console.log(subtitle);
let artistlist=null;
if(artists.length!=0){
    artistlist= <Grid container>
    {artists.map((artist)=>{
            return <Grid item xs="auto" sm="auto" md="auto" lg="auto" xl="auto"> 
            <ListItem>
                <ListItemIcon>
                 <StarRounded sx={{color:"white"}}/>
                </ListItemIcon>
                <ListItemText primary={artist}/>
            </ListItem>
            </Grid>
        })}
    </Grid>         
}
else{
    artistlist=<Typography variant="subtitle2" color="white">List Coming Soon..</Typography>
}

let favouritelistener=(id,events,favouriteevents,setfavouriteevents)=>{
let alreadyfavourite=false;
alreadyfavourite=favouriteevents.some(event=>event.id==id);
if(!alreadyfavourite){
    let index=events.findIndex(event=>event.id==id);
    setfavouriteevents([...favouriteevents,events[index]]);
}
}
if(!addlistner){
favouritelistener=()=>{
    console.log("inside favourite event listner");
}
}
let actionicon=<FavoriteBorderRounded sx={{color:"white"}}/>
if(eventtype=="favourite"){
    actionicon=<FavoriteRounded sx={{color:"red"}}/>
}

return <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
<Card sx={{marginBottom:"2px",backgroundColor:"#870074",color:"white",fontFamily:"Helvetica"}} raised>
<CardHeader title={title}
titleTypographyProps={{fontSize:"25px",fontWight:"500"}}
subheaderTypographyProps={{fontWeight:"bolder",color:"white"}}	 
avatar={<Avatar sx={{ bgcolor: "#311432",color:"white" }}>{weekday}</Avatar>}
subheader={subtitle}
action={<Button onClick={()=>favouritelistener(id,events,favouriteevents,setfavouriteevents)}>
{actionicon}
</Button>}
/>
<CardContent>
    <Typography variant="subtitle1" fontWeight="bolder" gutterBottom>Artists</Typography>
    {artistlist}
</CardContent>
<CardActions>
<LocationOn></LocationOn><span style={{paddingLeft:"1%"}}>{location}</span>
</CardActions>
</Card>
    </Grid>

}
export default Clubevent;