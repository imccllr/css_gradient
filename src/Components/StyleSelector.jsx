import React from 'react';

const StyleSelector = ({ sendUpGradientStyle }) => {
    const handleClick = (style) => {
        if (sendUpGradientStyle) sendUpGradientStyle(style);
    };
    
    return (
    <div className="style-selector">
        <div className="generic-button generic-button-with-text" onClick={() => { handleClick("linear") }}>Linear</div>
        <div className="generic-button generic-button-with-text" onClick={() => { handleClick("-webkit-radial") }}>Radial</div>
    </div>);
}

export default StyleSelector;