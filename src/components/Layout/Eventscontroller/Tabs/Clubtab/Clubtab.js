import React from "react";
import axios from "./axiosinstance";
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import "./clubtab.css"
import {createTheme , ThemeProvider} from "@mui/material/styles"
import {Typography,Grid} from "@mui/material";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    neutral: {
      main: "#000000",
      contrastText:"#FFFFFF",
    },
  },
});

const Clubtab=(props)=>{

let {visibility,clubloaded,setclubloaded,clubstatus,setloadedclubdata,setclubstatus,clublink,currentclub,
        currentclubloading,setcurrentclubloading,clubsloaded,setmjutdata,setifzdata,setdistillerydata
        ,setneueweltdata,setclubsloaded,children}=props;
let [currentclubdata,setcurrentclubdata]=useState(null);


function clickhandler(){
if(clubloaded==currentclub){
 setclubloaded(null);
 setloadedclubdata(null);   
}
else if(currentclubloading==currentclub){
setcurrentclubloading(null);
setclubstatus(false);
setclubloaded(null);
setloadedclubdata(null);
}
else{
if(currentclubdata==null){
    !clubstatus && setclubstatus(true);
    setcurrentclubloading(currentclub);
}
else{
    setcurrentclubloading(null);
    clubstatus && setclubstatus(false);
    setloadedclubdata(currentclubdata);
    setclubloaded(currentclub);
}
}
}
console.log(currentclub);

useEffect(()=>{
(async()=>{
    let response=await axios({
    method: 'get',
    url: clublink
});
console.log(clublink);
console.log(response.data);
setcurrentclubdata(response.data);
switch(currentclub){
  case 1:
    console.log("inside switchncase 1");
    setmjutdata(response.data);
    setclubsloaded(clubsloaded=>clubsloaded+1);
    break;
  case 2:
    console.log("inside switchncase 2");
    setifzdata(response.data);
    setclubsloaded(clubsloaded=>clubsloaded+1);
    break;
  case 3:
    console.log("inside switchncase 3");
    setdistillerydata(response.data);
    setclubsloaded(clubsloaded=>clubsloaded+1);
    break;
  case 4:
    console.log("inside switchncase 4");
    setneueweltdata(response.data);
    setclubsloaded(clubsloaded=>clubsloaded+1);
    break;
  }
})();

},[]);

useEffect(()=>{
  console.log("inside useeffect of currenclubdata");
if(currentclubloading==currentclub){
    console.log("inside data use effect");
      setcurrentclubloading(null);
      setclubstatus(false);
      setloadedclubdata(currentclubdata);
      setclubloaded(currentclub);
}
console.log(clubsloaded);
},[currentclubdata]);

let render= <Grid item xs={12} sm={6} md={3.5} lg={2.5} xl={2.5} sx={{marginTop:"3%"}} >
<ThemeProvider theme={theme}>
<Button
variant="outlined"
color="primary"
onClick={clickhandler}
size="large"
sx={{color:"white",paddingLeft:"15%",paddingRight:"15%"}}
>
<Typography fontFamily="Helvetica" fontSize="1.5rem" fontWeight="bolder">{children}</Typography>
</Button>
</ThemeProvider>
</Grid>
if(!visibility[currentclub]){
  render=<></>
  if(currentclubloading==currentclub){
    setcurrentclubloading(null);
    setclubstatus(null);
  }
  if(clubloaded==currentclub){
    setclubloaded(null);
    setloadedclubdata(null);
  }
}

return <>
{render}
</>
}

export default Clubtab;


//     function checkFlag(currentclubdata) {

//         return  new Promise(executer);
        
//         function executer(resolve, reject) {
//             if(currentclubdata.data.length==0){
//                 console.log("inside executer if");
//                 console.log(currentclubdata);
//                 setTimeout(executer.bind(this,resolve,reject),100);
//             }
//             else{
//                 resolve(currentclubdata);
//                 console.log("pormise resolved");
//             }
//           }
// }
// checkFlag(currentclubdata).then(data=>{
//     console.log("inside check flag");
//       setclubstatus(false);
//           setloadedclubdata(currentclubdata);
//           setclubloaded(currentclub);    
// });