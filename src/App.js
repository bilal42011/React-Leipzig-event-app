import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header/Header";
import Eventscontroller from "./components/Layout/Eventscontroller/Eventscontroller";
import AllWeekendevents from "./components/Layout/AllWeekendevents/AllWeekendevents";
import { Route, Routes } from "react-router";

const App = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route exact path="/" element={<Eventscontroller />}></Route>
          <Route exact path="/allevents" element={<AllWeekendevents />}></Route>
        </Routes>
      </Layout>
    </>
  );
};
export default App;
