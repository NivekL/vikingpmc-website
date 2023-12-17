import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./page-sections/About";
import Information from "./page-sections/Information";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Information />
    </div>
  );
}

export default App;
