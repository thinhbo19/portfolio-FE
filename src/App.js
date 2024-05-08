import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          {/* <Testimonials /> */}
          <Blog />
          <Contact />
        </main>
      </Router>
    </>
  );
}

export default App;
