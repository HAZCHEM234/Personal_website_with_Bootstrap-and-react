import React from "react";
import './Heros.css';
import macImage from "./Mac.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';



const Heros = () => {

    const h1Style = {
        fontFamily: 'Bogart',
    };

    const pStyle = {
        
        fontFamily: 'Montserrat',
    };

    return(
        <div className="fluid-container custom-container-height">
        <div className="row">
            <div className="col-md-6">
                <p className="p-por" style={pStyle}>PORTFOLIO</p>
                <h1 className="haz" style={h1Style}>Haziq Che Rose</h1>
                <div className="d-flex justify-content-between align-items-center lol">
                        <p className="web-developer-text" style={pStyle}>WEB DEVELOPER</p>
                        <p className="web-developer-text" style={pStyle}>EMAIL ME</p>
                    </div>

            </div>
            <div className="col-md-6 text-md-right">
                <img src={macImage} alt="mac" style={{ width: '100%', height: '40vw', objectFit: 'cover' }} />
            </div>
        </div>
    </div>
    )
}

export default Heros; 