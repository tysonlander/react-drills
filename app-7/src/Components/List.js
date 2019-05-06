import React, {Component} from 'react';
import Todo from "./Todo";

export default class List extends Component {
  render(){
    const myList = this.props.task.map((element, index) => {
      return <Todo key={index} task={element}/>;
    });
    return <div>{myList}</div>
  }
}