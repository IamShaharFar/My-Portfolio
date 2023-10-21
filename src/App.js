// import logo from './logo.svg';
import "./App.css";
import React, { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Accessibility} from "accessibility-react/dist/index"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    document.title = "Shahar's portfolio";
  }, []);

  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Accessibility/>
    </div>
  );
}

export default App;
