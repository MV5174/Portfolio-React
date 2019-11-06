import React from "react";
import "./styles.css";

function About() {
    return (
        <div className="aboutContent">
            <h1 className="contentTitle">About Me</h1>
            <img className="myPic"
                src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/313378_10151416970458463_1904906994_n.jpg?_nc_cat=101&_nc_oc=AQnwMDhGPdhJ1Tm40zEQhwJxlQcW_-bMr7ay6t9V1Pn1IQ7pM8Ax_L2edBz-MqTebG8&_nc_ht=scontent-mia3-2.xx&oh=318970debfbff992cbb16979c642baf4&oe=5DE0AB85"></img>
            <p className="info">
                <a href="https://github.com/MV5174">My Github Profile</a><br />
                <a href="https://www.linkedin.com/in/michael-vega-45200b187/">My LinkedIn Profile</a><br />
                Email Address: ichigo509@yahoo.com <br />
                Phone Number: 757-362-1157 <br />
            </p>
            <ul className="apps">
                <li><strong>Liri Bot App:</strong></li>
                <li>Github: <a href="https://github.com/MV5174/liri-node-app">https://github.com/MV5174/liri-node-app</a></li>
                <li><strong>Word Guess Game:</strong></li>
                <li>Deployed Version: <a href="https://mv5174.github.io/Word-Guess-Game/">https://mv5174.github.io/Word-Guess-Game/</a></li>
                <li>Github: <a href="https://github.com/MV5174/Word-Guess-Game">https://github.com/MV5174/Word-Guess-Game</a></li>
                <li><strong>Train Scheduler:</strong></li>
                <li>Deployed Version: <a href="https://mv5174.github.io/Train-Time-HW/">https://mv5174.github.io/Train-Time-HW/</a></li>
                <li>Github: <a href="https://github.com/MV5174/Train-Time-HW">https://github.com/MV5174/Train-Time-HW</a></li>
            </ul>
        </div>
    )
}

export default About