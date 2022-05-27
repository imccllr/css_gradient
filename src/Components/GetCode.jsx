import React from 'react';
import { ReactSVG } from 'react-svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './../Styles/GetCode.css';

const GetCode = ({ loadedStyle, loadedColor1, loadedColor2, loadedDegrees }) => {
    if (loadedStyle === "-webkit-radial") loadedStyle = "radial";

    const textAreaValue = `background: ${loadedColor1}; /* Old browsers */
        background: -moz-${loadedStyle}-gradient(${loadedDegrees},  ${loadedColor1}, ${loadedColor2}); /* FF3.6-15 */
        background: -webkit-${loadedStyle}-gradient(${loadedDegrees},  ${loadedColor1}, ${loadedColor2}); /* Chrome10-25,Safari5.1-6 */
        background: ${loadedStyle}-gradient(${loadedDegrees},  ${loadedColor1}, ${loadedColor2}); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textAreaValue);
        toast.success("Content copied to your clipboard");
    };
    
    return (
        <div className="get-code">
            <textarea
                id="get-code-textarea"
                name="get-code-textarea"
                className="get-code-textarea generic-textarea"
                rows="6"
                cols="50"
                readOnly={true}
                value={textAreaValue}
            />
            <div className="generic-button-small" onClick={() => { copyToClipboard() }}>
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.classList.add('generic-button-icon');
                    }}
                    src="img/copy.svg"
                    className="copy-button-icon-container"
                    wrapper="div"
                />
            </div>
            <ToastContainer 
                position="bottom-left"
            />
        </div>
    );
}

export default GetCode;