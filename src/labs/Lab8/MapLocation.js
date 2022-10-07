import React from "react";
import "./MapStyle.css";

export default function MapLoaction(props) {
    // const [active, setActive] = useState(false);

    return (
    <circle 
        className="location"
        onClick={props.userSelected}
        strokeWidth={props.active ? 6 : 0}   
        cx={props.position.x} 
        cy={props.position.y} 
        r='12'>
    </circle>
    );
}