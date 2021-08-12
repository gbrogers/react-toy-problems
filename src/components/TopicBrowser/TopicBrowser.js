import React, { Component } from "react";
import EvenAndOdd from "../Topics/EvenAndOdd.js";
import FilterObject from "../Topics/FilterObject.js";
import FilterString from "../Topics/FilterString.js";
import Palindrome from "../Topics/Palindrome.js";

class TopicBrowser extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p>Hello World.</p>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
      </div>
    );
  }
}

export { TopicBrowser as Default };
