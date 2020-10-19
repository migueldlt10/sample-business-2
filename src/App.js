import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Payment";
import Contact from "./components/pages/Contact";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/payment" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
