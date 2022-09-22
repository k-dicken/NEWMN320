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
          <p className="navLink" id="lab5" onClick={() => {
            this.swapProject(1);
          }}>
              <h4>Lab 5</h4>
              <p>React Intro</p>
          </p>
          <p className="navBottom">Kylee Dicken</p>
          </div>
          <div className="displayProject">
            {this.state.pages[this.state.curPage]}
          </div>
      </div>
    );
  };
}

