import React from "react";
import { useState } from "react";
import Tabs from "./Tabs/Tabs";
import Eventsrendrer from "./Eventsrendrer/Eventsrendrer";
import WeatherSwitches from "./WeatherSwitches/WeatherSwitches";
import {Divider} from "@mui/material";

const Eventscontroller=(props)=>{

let [visibility,setvisibility]=useState({1:true,2:true,3:true,4:true});
let [currentclubloading,setcurrentclubloading]=useState(null);
let [clubstatus,setclubstatus]=useState(false);
let [clubloaded,setclubloaded]=useState(null);
let [loadedclubdata,setloadedclubdata]=useState(null);
let [favouriteevents,setfavouriteevents]=useState([]);
let [clubsloaded,setclubsloaded]=useState(0);
let [mjutdata,setmjutdata]=useState(null);
let [ifzdata,setifzdata]=useState(null);
let [distillerydata,setdistillerydata]=useState(null);
let [neueweltdata,setneueweltdata]=useState(null);


console.log(currentclubloading);
console.log(favouriteevents);
console.log(mjutdata);
console.log(ifzdata);
console.log(distillerydata);
console.log(neueweltdata);
console.log(clubsloaded);

return <div style={{backgroundColor:"#311432"}}>

<Tabs visibility={visibility} 
clubloaded={clubloaded} 
currentclubloading={currentclubloading}
setcurrentclubloading={setcurrentclubloading}
clubstatus={clubstatus}
setclubloaded={setclubloaded}
 setloadedclubdata={setloadedclubdata}
 setclubstatus={setclubstatus}
 setmjutdata={setmjutdata}
 setdistillerydata={setdistillerydata}
 setneueweltdata={setneueweltdata}
 setifzdata={setifzdata}
 clubsloaded={clubsloaded}
 setclubsloaded={setclubsloaded}/>



 <Eventsrendrer clubloaded={clubloaded} 
 clubstatus={clubstatus} 
favouriteevents={favouriteevents}
events={loadedclubdata}
 setfavouriteevents={setfavouriteevents}
 mjutdata={mjutdata}
 ifzdata={ifzdata}
 distillerydata={distillerydata}
 neueweltdata={neueweltdata}
 clubsloaded={clubsloaded}/>
 
 <WeatherSwitches visibility={visibility} setvisibility={setvisibility} />
 </div>
}

export default Eventscontroller;