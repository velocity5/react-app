import React, { Component } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

class SocialLink extends Component {
  render() {
    return (
      <div className="social-link">
        <Link to="/">
          <FacebookIcon />
        </Link>
        <Link to="/">
          <YouTubeIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
      </div>
    );
  }
}

export default SocialLink;
