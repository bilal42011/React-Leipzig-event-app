import React from "react";
import { Switch,FormControlLabel,Typography } from "@mui/material";

const Switchitem=(props)=>{
let {name,currentclub,visibility,setvisibility}=props;

let handlechange=(event,currentclub,visibility)=>{
let newvisibility={...visibility};
newvisibility[currentclub]=event.target.checked;
setvisibility(newvisibility);
}

return <FormControlLabel labelPlacement="end" sx={{marginBottom:"5%"}}
control={<Switch  checked={visibility[currentclub]}
color="secondary"
 onChange={(event)=>handlechange(event,currentclub,visibility,setvisibility)}/>}
    label={
    <Typography variant="subtitle1"
     fontWeight="bolder"
     fontSize="1.3rem"
     marginLeft="5%">{name}</Typography>
}

/>

}

export default Switchitem;