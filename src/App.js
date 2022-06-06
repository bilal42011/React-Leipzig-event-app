import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header/Header";
import Eventscontroller from "./components/Layout/Eventscontroller/Eventscontroller";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App=(props)=>{
    
    return <> 
    <Layout>
        <Header />
        <Eventscontroller/>
    </Layout>
    </>
}
export default App ;