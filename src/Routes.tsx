import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import CatalogComponent from "./components/Catalog/CatalogComponet";
import CategoryDetailComponent from "./components/CategoryDetail/CategoryDetailComponent";

const routes = (
  <Switch>
    <Route exact path="/" component={HomeComponent}></Route>
    <Route
      exact
      path="/detail/:param1/:param2"
      component={CategoryDetailComponent}
    ></Route>
    <Route exact path="/:param1/:param2?" component={CatalogComponent}></Route>
  </Switch>
);

export default routes;
