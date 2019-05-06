import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super();

    this.state = {
      input: '',
      todos: []
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInput(val){
    this.setState({input: val});
  }

  handleAdd() {
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: ''
    });
  }

  render(){
    const myList = this.state.todos.map((element, index) => {
      return <Todo key={index} task={element}/>;
    })
    return(
      <div className='App'>
        <h1>My to-do list:</h1>
        <input 
        value={this.state.input}
        placeholder='enter an item'
        onChange={e => this.handleInput(e.target.value)} 
        />
        <button onClick={this.handleAdd}>Add</button>
        <br/>
        {myList}
      </div>
    )
  }
}
export default App;