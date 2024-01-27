import React, { useEffect, useRef, useState } from "react";
import contactImage from './contact-mail.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = titleRef.current;

      if (titleElement) {
        const { top } = titleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Adjust the threshold value as needed
        const threshold = 0.8;

        setIsTitleVisible(top < windowHeight * threshold);
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
    fontFamily: 'Bogart',
    fontSize: '4.5vw',
    fontWeight: '500',
    // Set the rise animation with a duration of 4 seconds
    animation: isTitleVisible ? 'riseAnimation 4s ease-out' : 'none',
  };

  const rowStyle = {
    height: '40vw',
    marginTop: '10vw',
  };

  const imgStyle = {
    width: '80%',
    height: 'auto',
    marginTop: '5vw',
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const pStyle = {
    fontSize: '1vw',
    fontFamily: 'Montserrat',
    textAlign: 'left',
    marginLeft: '17vw',
  };

  const pStyleB = {
    fontSize: '1vw',
    fontFamily: 'Bogart',
    textAlign: 'left',
    marginLeft: '17vw',
  };

  return (
    <div className="fluid-container">
      <div className="row" style={rowStyle}>
        <div className="col-md-6">
          <h1 style={h1Style} ref={titleRef}>
            Work with me
          </h1>
          <img src={contactImage} alt="contact-me" style={imgStyle} />
        </div>
        <div className="col-md-6 right" style={rightColumnStyle}>
          <div className="mt-auto">
            <p style={pStyle}>ADDRESS</p>
            <p style={pStyleB}>122 George Street, Waiuku, Auckland</p>
            <p style={pStyle}>PHONE</p>
            <p style={pStyleB}>021-030-1901</p>
            <p style={pStyle}>EMAIL</p>
            <p style={pStyleB}>muhammadhaziq.cr@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
