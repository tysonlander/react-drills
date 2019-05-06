import React, {Component} from 'react';
import './App.css';
import List from './Components/List';
import NewTask from './Components/NewTask';

class App extends Component {
  constructor(){
    super();

    this.state = {
      todos: []
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(task){
    this.setState({todos: [...this.state.todos, task]})
  }  

  

  render(){
    return(
      <div className='App'>
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAdd}/>
        <List task={this.state.todos}/>
      </div>
    );
  }
}
export default App;