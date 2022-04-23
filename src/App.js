import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "../src/components/AppNavigator";
import Pokedex from "./containers/Pokedex";

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Route path="/" component={Pokedex} />
    </Router>
  );
}
