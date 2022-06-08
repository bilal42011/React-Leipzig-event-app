import React , {useState, useEffect} from "react"
import {Typography,Grid,Stack,LinearProgress} from "@mui/material";
import axios from "../Eventscontroller/Tabs/Clubtab/axiosinstance";
import Allevents from "./Allevents/Allevents";

const AllWeekendevents=(props)=>{
let [currentallevents,setcurrentallwevents]=useState(null);


useEffect(()=>{

(async()=>{
    let allevents=[];

    let {data:mjutdata}=await axios({
        method:"get",
        url:"/mjut/allweekendeventlist"
    });

    let {data:ifztdata}=await axios({
        method:"get",
        url:"/ifz/allweekendeventlist"
    })

    let {data:distillerydata}=await axios({
        method:"get",
        url:"/distillery/allweekendeventlist"
    });
    
    let {data:neueweltdata}=await axios({
        method:"get",
        url:"/neuewelt/allweekendeventlist"
    });
    
allevents=[...mjutdata,...ifztdata,...distillerydata,...neueweltdata];
setcurrentallwevents(allevents);
})();
})

let render=<Stack sx={{ width: '90%',borderRadius:"1%", minHeight:"20vh",margin:"auto",marginTop:"2%", color: 'gray'
,backgroundColor:"#563C5C",border:"1px solid purple",padding:"2%",paddingTop:"5%"}} spacing={5}>
      <LinearProgress  color="primary"/>
      <LinearProgress color="success" />
      <LinearProgress color="inherit"/>
    </Stack>
if(currentallevents!=null){    
render=<Allevents allevents={currentallevents}/>
}
return <div style={{backgroundColor:"#311432",minHeight:"70vh"}}>
     <Typography 
        variant="h4"
        fontWeight="700"
        fontSize="2.5rem"
        fontFamily="Helvetica"
        textAlign="center"
        color="white"
          gutterBottom 
          sx={{margin:"auto",marginBottom:"3%",width:"30%",paddingBottom:"0.6%"
          ,borderBottom:"2px solid white",paddingTop:"4%"}}>All Weekend Events</Typography>
{render}
</div> 


}
export default AllWeekendevents;