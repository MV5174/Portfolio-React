import React, { Component } from "react";
import "./sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="socialMedia">
        <div className="facebook sm">
          <img src="http://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png" />
          <p><strong>Facebook</strong></p>
        </div>
        <div className="instagram sm">
          <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png" />
          <p>Instagram</p>
        </div>
      </div>
    )
  }
}

export default Sidebar;