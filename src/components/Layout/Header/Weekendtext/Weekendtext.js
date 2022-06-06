import React from "react";
import Typography from '@mui/material/Typography';
import "./weekendtext.css";
import Weekenddate from "./Weekenddate/Weekenddate";

const WeekendText=(props)=>{
return <div className="weekendtextwrapper">
    <Typography variant="h2" align="center" fontFamily="Helvetica" fontWeight="900" fontSize="70px" 
    letterSpacing="0px" color="white" textAlign="center"
    sx={{textDecorationLine:"underline",  textUnderLinePosition:"under"}}  >
        THIS WEEKEND
        </Typography>
        <Weekenddate />
</div>

}

export default WeekendText;