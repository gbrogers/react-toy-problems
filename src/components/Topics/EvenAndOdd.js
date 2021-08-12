import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  updateUserInput = (value) => {
    this.setState({ userInput: value });
  };

  solveProblem = (userStr) => {
    var inputArr = userStr.split(",");
    var evenNums = [];
    var oddNums = [];

    for (let char in inputArr) {
      let eachNum = +inputArr[char];
      if (eachNum % 2 === 0) {
        evenNums.push(eachNum);
      } else {
        oddNums.push(eachNum);
      }
    }

    this.setState({ evenArray: evenNums, oddArray: oddNums });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(event) => {
            this.updateUserInput(event.target.value);
          }}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.solveProblem(this.state.userInput)}
        ></button>
        <span className="resultsBox">`${this.state.evenArray}`</span>
        <span className="resultsBox">`${this.state.oddArray}`</span>
      </div>
    );
  }
}

export { EvenAndOdd as Default };
