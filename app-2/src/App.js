import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
  
    this.state = {
      list: ['I', 'love', 'to', 'hike', 'and', 'cook']
    }
  }
  render(){
    let likes = this.state.list.map((element, index) => { 
      return <h2 key={index}>{element}</h2>;
    });
    return(
      <div className='App'>
        {likes}
      </div>
    )
  }
}

export default App;