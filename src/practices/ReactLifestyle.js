import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./ReactLifestyle.css";

export default function Example() {
    const [inProp, setInProp] = useState(false);

    return (
        <div>
            <CSSTransition in={inProp} timeout={6000} classNames="my-node">
                <div className="my-node">Test</div>
            </CSSTransition>

            <button type="button" onClick={() => setInProp(true)}>
                Click to Test
            </button>
        </div>
    );
}

// export default function WaterTracker() {
//     const [glasses, setGlasses] = useState(0);
//     const [inProp, setInProp] = useState(false);

//     useEffect(() => {
//         document.title = "Don't forget to drink water!";
//     }, []);

//     function runFunctions() {
//         setInProp(true);
//         setGlasses(glasses + 1);
//     };

//     return (
//         <div className="waterTracker">
//             <CSSTransition in={inProp} timeout={800} classNames="glassCounter">
//                 <p className="glassCounter">You drank {glasses} glasses of water today!</p>
//             </CSSTransition>

//             <button onClick={() => {runFunctions()}}>
//                 Drink a Glass
//             </button>
//         </div>
//     );
// }

// export default class Example extends React.Component {
//     state = { test: "test" }

//     constructor() {
//         super();
//         console.log("Constructing");
//     }

//     componentDidMount() {
//         console.log("Component about to mount");
//     }

//     render() {
//         console.log("In render");
//         return  <div>
//                     {""}
//                     <button onClick={() => {this.setState({ test: "success"})}}>Change</button>
//                     {this.state.test}
//                 </div>
//     }

//     componentDidUpdate() {
//         console.log("Update happened");
//     }
// }