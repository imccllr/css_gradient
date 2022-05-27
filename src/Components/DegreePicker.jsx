import React from 'react';
import DegreeButton from './DegreeButton';

import './../Styles/DegreePicker.css';

const DegreePicker = ({ loadedStyle, sendUpDegrees }) => {
    const _sendUpDegrees = (degrees) => {
        if (sendUpDegrees) sendUpDegrees(degrees);
    };

    return (
        <div className="degree-picker">
            <DegreeButton orientation="upLeft" sendUpDegrees={_sendUpDegrees} degrees={225} />
            <DegreeButton orientation="up" sendUpDegrees={_sendUpDegrees} degrees={270} />
            <DegreeButton orientation="upRight" sendUpDegrees={_sendUpDegrees} degrees={315} />
            <DegreeButton orientation="left" sendUpDegrees={_sendUpDegrees} degrees={180} />
            {loadedStyle === 'linear' && <DegreeButton isEmpty />}
            {loadedStyle === '-webkit-radial' && <DegreeButton isRadial sendUpDegrees={_sendUpDegrees} degrees={360} />}
            <DegreeButton orientation="right" sendUpDegrees={_sendUpDegrees} degrees={0} />
            <DegreeButton orientation="downLeft" sendUpDegrees={_sendUpDegrees} degrees={135} />
            <DegreeButton orientation="down" sendUpDegrees={_sendUpDegrees} degrees={90} />
            <DegreeButton orientation="downRight" sendUpDegrees={_sendUpDegrees} degrees={45} />

        </div>
    );
}

export default DegreePicker;