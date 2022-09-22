import React from "react";
import './App.css';
// import NavBar from './Navbar'
import Lab5 from "./labs/Lab5/RecipeSearch";

export default class App extends React.Component {
  state = {
    pages: ["", <Lab5/>],
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
          <div className="navLink" id="lab5" onClick={() => {
            this.swapProject(1);
          }}>
              <p>Lab 5</p>
              <p>React Intro</p>
          </div>
          <p className="navBottom">Kylee Dicken</p>
          </div>
          <div className="displayProject">
            {this.state.pages[this.state.curPage]}
          </div>
      </div>
    );
  };
}

