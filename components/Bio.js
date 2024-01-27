import React, { useEffect, useRef, useState } from "react";
import appImages from "./app-development.png";
import upworkImage from "./upwork-logo-png-transparent.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bio.css";

const Bio = () => {
  const [isBioVisible, setIsBioVisible] = useState(false);

  const bioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bioElement = bioRef.current;

      if (bioElement) {
        const { top } = bioElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Adjust the threshold value as needed
        const threshold = 0.8;

        setIsBioVisible(top < windowHeight * threshold);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const h1Style = {
    fontFamily: "Bogart",
    fontSize: "4vw",
    fontWeight: "500",
  };

  const pStyle = {
    fontFamily: "Montserrat",
    fontSize: "1vw",
    // Add the rise animation class based on the visibility state
    animation: isBioVisible ? "riseAnimation 0.5s ease-out" : "none",
  };

  return (
    <div className="fluid-container custom-container-height2">
      <div className="row">
        <div className="col-md-6 bio1">
          <p style={pStyle}>BIO</p>
          <img src={appImages} alt="web-developer" className="web-image" />
        </div>
        <div className="col-md-5 bion" ref={bioRef}>
          <h2 className="bio2" style={h1Style}>
            I am a freelance Web developer on Upwork
          </h2>
          <p className="bio bio2" style={pStyle}>
            Hello there! I'm Haziq, a passionate front-end developer with a knack
            for creating engaging and responsive user interfaces using React. My
            journey in the world of web development began 3 years ago, and ever
            since then, I've been on an exciting adventure of learning and building.
          </p>
          <img src={upworkImage} alt="upwork-logo" className="img-fluid upwork" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
