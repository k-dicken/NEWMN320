import React from "react";
import './App.css';
// import NavBar from './Navbar'

//labs
import Lab5 from "./labs/Lab5/RecipeSearch";
import Lab6 from "./labs/Lab6/Dialogue";
import Lab7 from "./labs/Lab7/ReactAnimation";
import Lab8 from "./labs/Lab8/Map";

//practice
// import ReactLifestyle from "./practices/ReactLifestyle"
// import JSONPractice from "./practices/json/data"

export default class App extends React.Component {
  state = {
    pages: ["", <Lab5/>, <Lab6/>, <Lab7/>, <Lab8/>],
    curPage: 0
  };

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
    console.log("swithc");
  }

  render() {
    return(
      <div>
          <div className="nav">
            <h2>Labs</h2>
            <br/>

              <div className="navLink" id="lab5" onClick={() => {
                this.swapProject(1);
              }}>
                  <b>Lab 5</b>
                  <p>React Intro</p>
                  <br/>
              </div>

              <div className="navLink" id="lab6" onClick={() => {
                this.swapProject(2);
              }}>
                  <b>Lab 6</b>
                  <p>Dialogue Detective</p>
                  <br/>
              </div>

              <div className="navLink" id="lab7" onClick={() => {
                this.swapProject(3);
              }}>
                  <b>Lab 7</b>
                  <p>React Animation</p>
                  <br/>
              </div>

              <div className="navLink" id="lab8" onClick={() => {
                this.swapProject(4);
              }}>
                  <b>Lab 8</b>
                  <p>Data Map</p>
                  <br/>
              </div>

            <p className="navBottom">Kylee Dicken</p>
          </div>

          <div className="displayProject">
            {this.state.pages[this.state.curPage]}
          </div>

          <Lab8/>
      </div>
    );
  };
}

