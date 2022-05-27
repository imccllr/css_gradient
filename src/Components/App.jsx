import React, { useState } from 'react';
import MainMenu from './MainMenu';
import Canvas from './Canvas';

const App = () => {
    const [styleToLoad, setStyleToLoad] = useState("linear");
    const [colorToLoad1, setColorToLoad1] = useState(`#${(Math.random().toString(16) + "000000").substring(2, 8)}`);
    const [colorToLoad2, setColorToLoad2] = useState(`#${(Math.random().toString(16) + "000000").substring(2, 8)}`);
    const [degreesNumber, setDegreesNumber] = useState(0);
    const [degreesToLoad, setDegreesToLoad] = useState("to left");

    React.useEffect(() => {
        if (styleToLoad === "linear") {
            switch (degreesNumber) {
                case 360: setDegreesToLoad("to left"); break;
                case 225: setDegreesToLoad("to right bottom"); break;
                case 270: setDegreesToLoad("to bottom"); break;
                case 315: setDegreesToLoad("to left bottom"); break;
                case 180: setDegreesToLoad("to right"); break;
                case 0: setDegreesToLoad("to left"); break;
                case 135: setDegreesToLoad("to right top"); break;
                case 90: setDegreesToLoad("to top"); break;
                case 45: setDegreesToLoad("to left top"); break;
                default: break;
            }
        }
        if (styleToLoad === "-webkit-radial") {
            switch (degreesNumber) {
                case 360: setDegreesToLoad("center"); break;
                case 225: setDegreesToLoad("left top"); break;
                case 270: setDegreesToLoad("center top"); break;
                case 315: setDegreesToLoad("right top"); break;
                case 180: setDegreesToLoad("left center"); break;
                case 0: setDegreesToLoad("right center"); break;
                case 135: setDegreesToLoad("left bottom"); break;
                case 90: setDegreesToLoad("center bottom"); break;
                case 45: setDegreesToLoad("right bottom"); break;
                default: break;
            }
        }
    }, [styleToLoad, degreesNumber]);

    return (
        <>
            <MainMenu
                loadedColor1={colorToLoad1}
                loadedColor2={colorToLoad2}
                loadedStyle={styleToLoad}
                loadedDegrees={degreesToLoad}
                sendUpGradientStyle={setStyleToLoad}
                sendUpSelectedColor1={setColorToLoad1}
                sendUpSelectedColor2={setColorToLoad2}
                sendUpDegrees={setDegreesNumber}
                sendUpRandomColor1={setColorToLoad1}
                sendUpRandomColor2={setColorToLoad2}
            />
            <Canvas
                loadedStyle={styleToLoad}
                loadedColor1={colorToLoad1}
                loadedColor2={colorToLoad2}
                loadedDegrees={degreesToLoad}
            />
        </>
    );
}

export default App;