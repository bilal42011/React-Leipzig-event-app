import React from "react"
import Weatherlist from "./Weatherlist/Weatherlist";
import Switchlist from "./Switchlist/Switchlist";


const WeatherSwitches=(props)=>{

return <div style={{backgroundColor:"#32174D",marginTop:"6%"}}>
<Weatherlist />
<Switchlist {...props} />
</div>

}
export default WeatherSwitches;