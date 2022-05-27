import React from 'react';
import ColorPicker from './ColorPicker';
import { ReactSVG } from 'react-svg';

import './../Styles/ColorPickerSection.css';

const ColorPickerSection = ({ loadedColor1, loadedColor2, sendUpSelectedColor1, sendUpSelectedColor2, sendUpRandomColor1, sendUpRandomColor2 }) => {
    const setRandomColors = () => {
        if (sendUpRandomColor1) sendUpRandomColor1(`#${(Math.random().toString(16) + "000000").substring(2, 8)}`);
        if (sendUpRandomColor2) sendUpRandomColor2(`#${(Math.random().toString(16) + "000000").substring(2, 8)}`);
    };

    return (
        <div className="color-picker-section">
            <ColorPicker loadedColor={loadedColor1} sendUpSelectedColor={sendUpSelectedColor1} />
            <ColorPicker loadedColor={loadedColor2} sendUpSelectedColor={sendUpSelectedColor2} />
            <div className="generic-button-small" onClick={() => { setRandomColors() }}>
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.classList.add('generic-button-icon');
                    }}
                    src="img/shuffle.svg"
                    className="random-button-icon-container"
                    wrapper="div"
                />
            </div>
        </div>
    );
}

export default ColorPickerSection;