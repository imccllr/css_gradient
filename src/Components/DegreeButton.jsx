import React from 'react';
import { ReactSVG } from 'react-svg'

import './../Styles/DegreeButton.css';

const DegreeButton = ({ isEmpty, isRadial, degrees, sendUpDegrees }) => {
    const handleClick = (val) => {
        if (sendUpDegrees) sendUpDegrees(val);
    };

    return (
        isEmpty ? (<div className="generic-button-empty"></div>)
            :
            isRadial ? (<div className="generic-button" onClick={() => { handleClick(degrees) }}>
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.classList.add('generic-button-icon');
                    }}
                    src="img/circle.svg"
                    className="degree-button-icon-container"
                    wrapper="div"
                />
            </div>)
                :
                <div className="generic-button" onClick={() => { handleClick(degrees) }}>
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add('generic-button-icon');
                            svg.setAttribute('style', `transform: rotate(${degrees}deg)`)
                        }}
                        src="img/arrow-right.svg"
                        className="degree-button-icon-container"
                        wrapper="div"
                    />
                </div>
    );
}

export default DegreeButton;