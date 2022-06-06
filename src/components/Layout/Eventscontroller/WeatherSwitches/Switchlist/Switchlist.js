import React from "react";
import { Typography,FormGroup,Grid} from "@mui/material";
import Switchitem from "./Switchitem/Switchitem";

const Switchlist=(props)=>{

return <div style={{marginTop:"5%"}}>
    <Typography fontWeight="700" fontSize="2.5rem" textAlign="center" fontFamily="Helvetica" 
    sx={{margin:"auto",paddingBottom:"0.3%"
    ,color:"white",width:"30%"}}>Select Your Favourite Clubs</Typography>
<Grid container  alignContent="center" justifyContent="center" direction="column">
    <Grid item xs={12} sm={12} md={5} lg={6} xl={6} 
    sx={{border:"1px solid black"
    ,padding:"6%",marginTop:"2%",backgroundColor:"#301934"
    ,color:"white",borderRadius:"5%"}}>
    <FormGroup>
<Switchitem name="Mjut" currentclub={1} {...props} />
<Switchitem name="Ifz" currentclub={2} {...props} />
<Switchitem name="Distillery" currentclub={3} {...props} />
<Switchitem name="Neuewelt" currentclub={4} {...props} />
    </FormGroup>
    </Grid>
</Grid>
</div>
}

export default Switchlist;