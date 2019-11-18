import React, { Component } from "react";
import "./Components/landing.scss";
import "./Components/sidebar.scss";
import "./Components/projects.scss";
import "./Components/contact.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="socialMedia">
          <div className="facebook sm">
          <img src="http://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png" />
            <p><strong>Facebook</strong></p>
          </div>
          <div className="instagram sm">
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png" />
            <p>Instagram</p>
          </div>
        </div> */}
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

          <a href="#projects" className="arrowTag"><img className="arrow" src="https://image.flaticon.com/icons/svg/37/37472.svg" /> </a>


        </div> {/*Ending of landing */}

        
        <div className="projects" id="projects">
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
