import React, { Component } from "react";
import "./landing.scss"
import Night from "../Night/night"

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <Night />
                
                <div className="App-header">
                    <h2>Hi, I'm </h2><h2 className="myName">Michael Vega</h2>
                    <h2>I'm a full-stack developer</h2>
                </div>

                <a href="#carousel" className="arrowTag"><img className="arrow" src="https://image.flaticon.com/icons/svg/37/37472.svg" /> </a>
            </div>
        )
    }
}

export default Landing;