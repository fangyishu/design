import React from "react";

import "./btn.css";

export default class MaterialButtonDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIn: false,
            isOut: false
        }
    }


    onMouseDown() {
        this.setState(() => {
            return {
                isIn: true
            };
        });
        setTimeout(() => {
            this.setState(() => {
                return {
                    isIn: false
                }
            });
        }, 400);
    }

    onMouseUp() {
        this.setState(() => {
            return {
                isOut: true
            };
        });
        setTimeout(() => {
            this.setState(() => {
                return {
                    isOut: false
                }
            });
        }, 400);
    }

    render() {

        return (
            <div>
                <h2>Button Click Effect</h2>
                <p>
                    <button
                        className={[
                            "btn",
                            "btn-secondary",
                            "btn-glowing",
                            this.state.isIn ? "in" : "",
                            this.state.isOut ? "out" : ""
                        ].join(" ")}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onMouseUp={this.onMouseUp.bind(this)}
                    >Button</button></p>
            </div>
        );
    }
}
