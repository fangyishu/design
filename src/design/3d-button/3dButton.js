import React from "react";

import "./3d-button.css";

export default class ThreeDButton extends React.Component {
    render() {
        return (
            <div>

                <p>3D Button effect with engraved text.</p>
                <div className="three-d-button">
                    <div className="three-d-button__text">PRESS ME</div>
                </div>
            </div>
        );
    }
}