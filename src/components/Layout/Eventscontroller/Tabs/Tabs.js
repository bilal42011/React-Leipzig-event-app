import React from "react";
import Clubtab from "./Clubtab/Clubtab";
import { Grid } from "@mui/material";
import "./tabs.css";

let Tabs = (props) => {
  return (
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      sx={{ textAlign: "center", paddingTop: "1%", marginBottom: "7%" }}
    >
      <Clubtab
        {...props}
        data="mjutdata"
        currentclub={1}
        clublink="/mjut/weekendeventlist"
      >
        Mjut
      </Clubtab>
      <Clubtab
        {...props}
        data="ifzdata"
        currentclub={2}
        clublink="/ifz/weekendeventlist"
      >
        IFZ
      </Clubtab>
      <Clubtab
        {...props}
        data="distillerydata"
        currentclub={3}
        clublink="/distillery/weekendeventlist"
      >
        Dist
      </Clubtab>
      <Clubtab
        {...props}
        data="neueweltdata"
        currentclub={4}
        clublink="/neuewelt/weekendeventlist"
      >
        Neuw
      </Clubtab>
    </Grid>
  );
};

export default Tabs;
