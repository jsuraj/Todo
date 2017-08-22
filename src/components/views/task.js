import React from 'react'
import store from '../../store'
import {toggleTodo} from '../../actions/actionCreators'

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // e.preventDefault();
    console.log(this.props.index);
    store.dispatch(toggleTodo(this.props.index));
  }

  render() {
    return (
      <li className={"list-group-item task "+this.props.todo.completed} onClick={this.handleClick}>
        <h6 style={this.props.todo.completed ? {"text-decoration": "line-through"} : {}}>
          {this.props.todo.text}
        </h6>
      </li>
    )
  }
}

export default Task
