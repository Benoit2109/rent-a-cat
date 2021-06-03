import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../components/views/home/Home";
import MainLayout from "../components/layouts/MainLayout";
import BreedList from "../components/views/breedList/BreedList";
import Categories from "../components/views/categories/Categories";
import Favorite from "../components/views/favorite/Favorite";

import '../css/Main.css';


const Root = () => (
  <Router>
    <Switch>
      <Home exact path="/"/>
      <MainLayout exact path="/categories" component={Categories}/>
      <MainLayout exact path="/races" component={BreedList}/>
      <MainLayout exact path="/favoris" component={Favorite}/>
    </Switch>
  </Router>
);

export default Root;