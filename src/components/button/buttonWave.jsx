import "./buttonStyle.css";

import React from 'react';

import { Link } from "react-router-dom";

const ButtonWave = ({ to, children }) => {
    return (
        <Link to={to}>
            <button className="boton">
                <div className="text">{children}</div>
                <div className="wave"></div>
            </button>
        </Link>
    );
};

export default ButtonWave;
