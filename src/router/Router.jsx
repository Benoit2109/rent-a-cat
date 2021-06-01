import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CatCard from "../components/commons/CatCard";
import Home from "../components/home/Home";
import MainLayout from "../layouts/MainLayout";

import '../css/Main.css';



const Root = () => (
  <Router>
    <Switch>
      <Home exact path="/"/>
      <MainLayout exact path="/catcard" component={CatCard}/>
    </Switch>
  </Router>
);

export default Root;