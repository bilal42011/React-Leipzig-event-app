import React from "react";
import { useState, useEffect } from "react";
import axios from "./Tabs/Clubtab/axiosinstance";
import Tabs from "./Tabs/Tabs";
import Eventsrendrer from "./Eventsrendrer/Eventsrendrer";
import WeatherSwitches from "./WeatherSwitches/WeatherSwitches";

const Eventscontroller = (props) => {
  let [visibility, setvisibility] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
  });
  let [currentclubloading, setcurrentclubloading] = useState(null);
  let [clubstatus, setclubstatus] = useState(false);
  let [clubloaded, setclubloaded] = useState(null);
  let [loadedclubdata, setloadedclubdata] = useState(null);
  let [favouriteevents, setfavouriteevents] = useState([]);
  let [clubsloaded, setclubsloaded] = useState(0);
  let [mjutdata, setmjutdata] = useState(null);
  let [ifzdata, setifzdata] = useState(null);
  let [distillerydata, setdistillerydata] = useState(null);
  let [neueweltdata, setneueweltdata] = useState(null);

  console.log(currentclubloading);
  console.log(favouriteevents);
  console.log(mjutdata);
  console.log(ifzdata);
  console.log(distillerydata);
  console.log(neueweltdata);
  console.log(clubsloaded);

  useEffect(() => {
    (async () => {
      // let allevents=[];

      let { data: datamjut } = await axios({
        method: "get",
        url: "/mjut/weekendeventlist",
      });
      console.log(datamjut);
      setmjutdata(datamjut);

      let { data: dataifz } = await axios({
        method: "get",
        url: "/ifz/weekendeventlist",
      });
      console.log(dataifz);
      setifzdata(dataifz);

      let { data: datadistillery } = await axios({
        method: "get",
        url: "/distillery/weekendeventlist",
      });
      console.log(datadistillery);
      setdistillerydata(datadistillery);

      let { data: dataneuewelt } = await axios({
        method: "get",
        url: "/neuewelt/weekendeventlist",
      });
      console.log(dataneuewelt);
      setneueweltdata(dataneuewelt);
      setclubsloaded(4);
    })();
  }, []);

  return (
    <div style={{ backgroundColor: "#32174D" }}>
      <Tabs
        visibility={visibility}
        clubloaded={clubloaded}
        currentclubloading={currentclubloading}
        setcurrentclubloading={setcurrentclubloading}
        clubstatus={clubstatus}
        setclubloaded={setclubloaded}
        setloadedclubdata={setloadedclubdata}
        setclubstatus={setclubstatus}
        mjutdata={mjutdata}
        ifzdata={ifzdata}
        distillerydata={distillerydata}
        neueweltdata={neueweltdata}
      />

      <Eventsrendrer
        clubloaded={clubloaded}
        clubstatus={clubstatus}
        favouriteevents={favouriteevents}
        events={loadedclubdata}
        setfavouriteevents={setfavouriteevents}
        mjutdata={mjutdata}
        ifzdata={ifzdata}
        distillerydata={distillerydata}
        neueweltdata={neueweltdata}
        clubsloaded={clubsloaded}
      />

      <WeatherSwitches visibility={visibility} setvisibility={setvisibility} />
    </div>
  );
};

export default Eventscontroller;
