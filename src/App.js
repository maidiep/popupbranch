import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Instagram from "./components/Instagram";
import Products from "./components/Products";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Intro />
        <Instagram />
        <Products />
      </div>
    );
  }
}

export default App;
