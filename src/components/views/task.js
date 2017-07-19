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
      <li className={"list-group-item "+this.props.todo.completed} onClick={this.handleClick}>
        {this.props.todo.text}
      </li>
    )
  }
}

export default Task
