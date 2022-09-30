import React from "react";

export default class Dialogue extends React.Component {
    state = {
        dialogue: [
            {
                text: "text1",
                choice: true
            },
            {
                text: "text2",
                choice: false
            },
        ]
    }

    render() {
        return (
            <p>{this.state.dialogue[1].text}</p>
        );
    }
}