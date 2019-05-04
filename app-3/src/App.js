import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends Component {
  constructor(){
    super();

    this.state = {
      filteredString: '',
      foods: ['i', 'love', 'to', 'eat', 'ice cream', ' ', 'do', 'you', 'love', 'to', 'eat', 'ice cream']
    };
  }

  handleChange(filter) {
    this.setState({ filteredString: filter});
  }

  render() {
    let foodsToDisplay = this.state.foods
    foodsToDisplay.filter((element, index) => {
        return element.includes(this.state.filteredString);
      });
    foodsToDisplay.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });


    return (
      <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        <div>
        {foodsToDisplay}
        </div>
      </div>
    );
  }
} 

export default App;


