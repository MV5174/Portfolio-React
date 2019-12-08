import React, { Component } from "react";
import "./Components/about.scss";
import "./Components/projects.scss";
import "./Components/contact.scss";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import "./Components/carousel.scss";
import Landing from "./Components/Landing/landing";
import pic from "./Images/pr3Cap.PNG"
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
              <div className="myPic"></div>
              <div className="summary">
                <p>Full Stack Web Developer with experience in C. Educated at Valencia College and University of Central Florida Continuing Ed with skills in HTML, CSS and JavaScript. I'm an ardent fan of learning new topics to further my skills, working with others to make designs that are unique and creative, and putting in extra work into the projects I love. I'm excited to leverage my skills and background to further my knowledge and work on a project I am passionate about.</p>
              </div>
              <div className="techSkills">
                <h2><strong>Technical Skills:</strong></h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>jQuery</li>
                  <li>Front-end frameworks (React)</li>
                  <li>Responsive UI Design</li>
                  <li>Testing and Debugging</li>
                  <li>Version Control (Git)</li>
                </ul>
              </div>
            </div>

            <div className="projects slide">
              <h2 className="header">Projects</h2>
              <div className="bounty hover-shadow pr">
                <a href="https://github.com/MV5174/Project3" target="blank">
                  <div className="pop">
                    <h4>Bounty Hunter</h4>
                    <p>A user authenticated video game that relies on React-Redux</p>
                  </div>
                </a>
              </div>
              <div className="kodex hover-shadow pr">
                <a href="https://github.com/MV5174/Project2" target="blank">
                  <div className="pop">
                    <h4>K()dex</h4>
                    <p>A user authenticated social media platform for coders</p>
                  </div>
                </a>
              </div>
              <div className="ez hover-shadow pr">
                <a href="https://github.com/MV5174/ProjectOne" target="blank">
                  <div className="pop">
                    <h4>EZ-Eatz</h4>
                    <p>An API-based app that finds recipes for ingredients you have or locations serving what you crave</p>
                  </div>
                </a>
              </div>
              <div className="friend hover-shadow pr">
                <a href="https://github.com/MV5174/FriendFinder" target="blank">
                  <div className="pop">
                    <h4>Friend Finder</h4>
                    <p>A short survey that matches you with friends</p>
                  </div>
                </a>
              </div>
              <div className="train hover-shadow pr">
                <a href="https://github.com/MV5174/Train-Time-HW" target="blank">
                  <div className="pop">
                    <h4>Train Scheduler</h4>
                    <p>An app that uses Firebase and MomentJs to store train schedules for user convenience</p>
                  </div>
                </a>
              </div>
              <div className="bamazon hover-shadow pr">
                <a href="https://github.com/MV5174/Bamazon" target="blank">
                  <div className="pop">
                    <h4>Bamazon</h4>
                    <p>A NodeJs-based app that utilizes MYSQL to store data for work convenience</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact slide">
              <h2 className="header">Contact</h2>
              <div className="info">
                <h4>Email: MVega7971@gmail.com </h4>
                <hr></hr>
                <h4>Tel: (757) 362-1157</h4>
                <hr></hr>
                <h4>Location: Kissimmee, Florida, 34744</h4>
                <hr></hr>
                <h4>Github: <a href="https://github.com/MV5174" target="blank">https://github.com/MV5174</a></h4>
                <hr></hr>
                <h4>LinkedIn: <a href="https://www.linkedin.com/in/michael-vega-45200b187/" target="blank">https://www.linkedin.com/in/michael-vega-45200b187/</a></h4>
              </div>
            </div>

          </AwesomeSlider>

        </div> {/*Ending of the carousel */}

        {/*Ending of the app */}</div>
    );
  }
}

export default App;
