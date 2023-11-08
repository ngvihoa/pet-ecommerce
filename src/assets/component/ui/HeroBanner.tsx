// import React from 'react'
import { BsPlayCircle } from "react-icons/bs";

const HeroBanner = () => {
  return (
    <div className="container hero-banner">
      <h1 className="hero-banner-line1">One More Friend</h1>
      <h3 className="hero-banner-line2">Thousands More Fun!</h3>
      <p className="hero-banner-p">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className="hero-banner-button-boundary">
        <button type="button" className="hero-banner-button button-intro">
          <div>
            View Intro <BsPlayCircle />
          </div>
        </button>
        <button type="button" className="hero-banner-button button-xplr">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
