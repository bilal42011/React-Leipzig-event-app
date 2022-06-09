import React from "react";
import { Typography, FormGroup, Grid } from "@mui/material";
import Switchitem from "./Switchitem/Switchitem";

const Switchlist = (props) => {
  return (
    <div style={{ marginTop: "8%" }}>
      <Typography
        fontSize="2.6rem"
        textAlign="center"
        fontFamily="Oswalo"
        sx={{
          margin: "auto",
          paddingBottom: "0.3%",
          marginBottom: "3%",
          color: "white",
          width: "30%",
        }}
      >
        Select Your Favourite Clubs
      </Typography>
      <FormGroup>
        <Grid
          container
          justifyContent="center"
          rowSpacing={4}
          sx={{
            padding: "6%",
            width: "80%",
            marginTop: "2%",
            backgroundColor: "#301934",
            alignText: "center",
            color: "white",
            borderRadius: "1.4%",
            margin: "auto",
            minHeight: "250px",
            alignContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={2}
            lg={2}
            xl={2}
            sx={{ marginRight: "2%" }}
          >
            <Switchitem name="Mjut" currentclub={1} {...props} />
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2} xl={2}>
            <Switchitem name="Ifz" currentclub={2} {...props} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={2}
            lg={2}
            xl={2}
            sx={{ marginRight: "50px" }}
          >
            <Switchitem name="Distillery" currentclub={3} {...props} />
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2} xl={2}>
            <Switchitem name="Neuewelt" currentclub={4} {...props} />
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default Switchlist;
