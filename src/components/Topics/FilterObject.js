import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      animals: [
        {
          animal: "dog",
          color: "pink",
          location: "couch",
          loved: true,
        },
        {
          animal: "snake",
          color: "green",
          loved: false,
        },
        {
          animal: "kitten",
          color: "orange",
          location: "window",
          loved: true,
        },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  updateUserInput = (value) => {
    this.setState({ userInput: value });
  };
  solveProblem = (input) => {
    var animal = this.state.animals;
    var filtered = [];

    for (let i = 0; i < input.length; i++) {
      if (animal[i].hasOwnProperty(input)) {
        filtered.push(animal[i]);
      }
    }
    this.setState({ filteredArray: filtered });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
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
        <span className="resultsBox">`${this.state.animals}`</span>
        <span className="resultsBox filterObjectRB">
          `${this.state.filteredArray}`
        </span>
      </div>
    );
  }
}

export { FilterObject as Default };
