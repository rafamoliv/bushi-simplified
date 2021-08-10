import React from "react";

// react-router-dom
import { BrowserRouter, Route } from "react-router-dom";

// import pages
import Landing from "../pages/Landing";
import Anime from "~/pages/Anime";

// routes
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/anime" component={Anime} />
    </BrowserRouter>
  );
}
