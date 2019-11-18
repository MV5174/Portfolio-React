import React, { Component } from "react";
import "./Components/landing.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing">

          <div class="night">
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
          </div>

          <div className="App-header">
            <h2>Hi, I'm </h2><h2 className="myName">Michael Vega</h2>
            <h2>I'm a full-stack developer</h2>
          </div>


        </div> {/*Ending of landing */}

        
        <div className="about">
          <h2>Projects</h2>
        </div>

        <div className="contact">
          <h2>Contact</h2>
        </div>

        {/*Ending of the app */}</div>
    );
  }
}

export default App;
