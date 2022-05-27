import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color'

import './../Styles/ColorPicker.css';

const ColorPicker = ({ loadedColor, sendUpSelectedColor }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(`${loadedColor}`);

    useEffect(() => {
        setSelectedColor(loadedColor);
    }, [loadedColor]);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleChange = (color) => {
        setSelectedColor(color.hex);
        if (sendUpSelectedColor) sendUpSelectedColor(color.hex);
    };

    return (
        <>
            <div className="generic-button" onClick={handleClick} style={{ background: `${selectedColor}` }} ></div>
            {displayColorPicker ?
                <div className="color-picker-popover">
                    <div className="color-picker-cover" onClick={handleClose} />
                    <SketchPicker color={selectedColor} onChange={handleChange} />
                </div>
                :
                null
            }
        </>
    );
}

export default ColorPicker;