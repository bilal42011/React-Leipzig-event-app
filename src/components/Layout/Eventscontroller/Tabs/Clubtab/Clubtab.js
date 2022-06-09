import React from "react";
import axios from "./axiosinstance";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./clubtab.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    neutral: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
  },
});

const Clubtab = (props) => {
  let {
    visibility,
    clubloaded,
    setclubloaded,
    clubstatus,
    setloadedclubdata,
    setclubstatus,
    currentclub,
    currentclubloading,
    setcurrentclubloading,
    children,
    data,
  } = props;
  let [currentclubdata, setcurrentclubdata] = useState(props[data]);

  function clickhandler() {
    if (clubloaded == currentclub) {
      setclubloaded(null);
      setloadedclubdata(null);
    } else if (currentclubloading == currentclub) {
      setcurrentclubloading(null);
      setclubstatus(false);
      setclubloaded(null);
      setloadedclubdata(null);
    } else {
      if (currentclubdata == null) {
        !clubstatus && setclubstatus(true);
        setcurrentclubloading(currentclub);
      } else {
        setcurrentclubloading(null);
        clubstatus && setclubstatus(false);
        setloadedclubdata(currentclubdata);
        setclubloaded(currentclub);
      }
    }
  }
  console.log(currentclub);

  useEffect(() => {
    if (props[data] != null) {
      setcurrentclubdata(props[data]);
      if (currentclubloading == currentclub) {
        console.log("inside data use effect");
        setcurrentclubloading(null);
        setclubstatus(false);
        setloadedclubdata(props[data]);
        setclubloaded(currentclub);
      }
    }
  }, [props[data]]);

  let render = (
    <Grid
      item
      xs={12}
      sm={6}
      md={2.5}
      lg={2.5}
      xl={2.5}
      sx={{ marginTop: "3%" }}
    >
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="primary"
          onClick={clickhandler}
          size="large"
          sx={{ color: "white", paddingLeft: "15%", paddingRight: "15%" }}
        >
          <Typography fontFamily="Oswalo" fontSize="2rem">
            {children}
          </Typography>
        </Button>
      </ThemeProvider>
    </Grid>
  );
  if (!visibility[currentclub]) {
    render = <></>;
    if (currentclubloading == currentclub) {
      setcurrentclubloading(null);
      setclubstatus(null);
    }
    if (clubloaded == currentclub) {
      setclubloaded(null);
      setloadedclubdata(null);
    }
  }

  return <>{render}</>;
};

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
