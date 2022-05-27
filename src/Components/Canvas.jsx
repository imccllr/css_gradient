import React from 'react';
import './../Styles/Canvas.css';

const Canvas = ({ loadedStyle, loadedColor1, loadedColor2, loadedDegrees }) => {
    return (<div className="canvas" style={{ background: `${loadedStyle}-gradient(${loadedDegrees}, ${loadedColor1}, ${loadedColor2})` }}></div>);
}

export default Canvas;