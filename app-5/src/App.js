import React, { Component } from "react";
import "./App.css";
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image pageNotFound={"https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"} />
          
      </div>
    );
  }
}

export default App;
