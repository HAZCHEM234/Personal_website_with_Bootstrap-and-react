import React, { useEffect, useRef, useState } from "react";
import ideaImages from './creative-idea.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quotes.css';

const Quotes = () => {
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
    textAlign: 'left',
    marginLeft: '10px',
    // Set the rise animation with a duration of 3 seconds
    animation: isTitleVisible ? 'riseAnimation 3s ease-out' : 'none',
  };

  const greyBackgroundStyle = {
    backgroundColor: '#F6F6F6',
    padding: '20px',
    height: '60vw',
  };

  return (
    <div className="fluid-container qbody">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={greyBackgroundStyle}>
          <h1 style={h1Style} ref={titleRef}>
            As a React enthusiast, I thrive on turning ideas into interactive and visually appealing web applications.
          </h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={ideaImages} alt="ideas images" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

export default Quotes;
