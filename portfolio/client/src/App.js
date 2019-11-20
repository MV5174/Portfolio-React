import React, { Component } from "react";
import "./Components/about.scss";
import "./Components/projects.scss";
import "./Components/contact.scss";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import "./Components/carousel.scss";
import Landing from "./Components/Landing/landing";
import Sidebar from "./Components/Sidebar/sidebar";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Sidebar /> */}

        <Landing />

        <div className="carousel" id="carousel">

          <AwesomeSlider cssModule={AwesomeSliderStyles}>

            <div className="about slide">
              <h2 className="header">About Me</h2>
            </div>

            <div className="projects slide">
              <h2 className="header">Projects</h2>
            </div>

            <div className="contact slide">
              <h2 className="header">Contact</h2>
            </div>

          </AwesomeSlider>

        </div> {/*Ending of the carousel */}
        
      {/*Ending of the app */}</div>
    );
  }
}

export default App;
