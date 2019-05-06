import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

  this.state = {
    filterString: '',
    favoriteThings: ['camping', 'travel', 'ice cream', 'movies', 'books', 'adventure books', 'vanilla ice cream']
  };
}
  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render(){
    let favoriteThingsToDisplay = this.state.favoriteThings.filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });

    return(
      <div className='App'>
        <input type="text" onChange={e => this.handleChange(e.target.value)}/>
        {favoriteThingsToDisplay}

      </div>
    );
  }

}

export default App