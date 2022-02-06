import React from 'react';
import "../App.css";

const SquareTile = ({ value, selectSquareTile }) => {
    return (
        <div className="squareTile" onClick={selectSquareTile}>
            {value}
        </div>
    );
};

export default SquareTile;
