import React from 'react';
import ColorPickerSection from './ColorPickerSection';
import DegreePicker from './DegreePicker';
import StyleSelector from './StyleSelector';
import GetCode from './GetCode';

import './../Styles/MainMenu.css';

const MainMenu = ({
    sendUpGradientStyle,
    loadedColor1,
    loadedColor2,
    loadedStyle,
    loadedDegrees,
    sendUpSelectedColor1,
    sendUpSelectedColor2,
    sendUpDegrees,
    sendUpRandomColor1,
    sendUpRandomColor2 }) => {

    const _sendUpGradientStyle = (style) => {
        if (sendUpGradientStyle) sendUpGradientStyle(style);
    }

    const _sendUpSelectedColor1 = (color) => {
        if (sendUpSelectedColor1) sendUpSelectedColor1(color);
    };

    const _sendUpSelectedColor2 = (color) => {
        if (sendUpSelectedColor2) sendUpSelectedColor2(color);
    };

    const _sendUpDegrees = (degrees) => {
        if (sendUpDegrees) sendUpDegrees(degrees);
    }

    const _sendUpRandomColor1 = (color) => {
        if (sendUpRandomColor1) sendUpRandomColor1(color);
    }

    const _sendUpRandomColor2 = (color) => {
        if (sendUpRandomColor2) sendUpRandomColor2(color);
    }

    return (
        <div className="main-menu">
            <div className="title">CSS Gradient Generator</div>
            <div className="subtitle">By Carlos Cuellar</div>
            <hr />
            <div className="section-label">Style</div>
            <StyleSelector sendUpGradientStyle={_sendUpGradientStyle} />
            <div className="section-label">Colors</div>
            <ColorPickerSection
                loadedColor1={loadedColor1}
                loadedColor2={loadedColor2}
                sendUpSelectedColor1={_sendUpSelectedColor1}
                sendUpSelectedColor2={_sendUpSelectedColor2}
                sendUpRandomColor1={_sendUpRandomColor1}
                sendUpRandomColor2={_sendUpRandomColor2}
            />
            <div className="section-label">Direction</div>
            <DegreePicker loadedStyle={loadedStyle} sendUpDegrees={_sendUpDegrees} />
            <div className="section-label">Get code</div>
            <GetCode
                loadedStyle={loadedStyle}
                loadedColor1={loadedColor1}
                loadedColor2={loadedColor2}
                loadedDegrees={loadedDegrees}
            />
        </div>
    );
}

export default MainMenu;