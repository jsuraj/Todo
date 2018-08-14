import React from 'react'
import store from '../../store'
import { toggleTodo, deleteTodo } from '../../actions/actionCreators'

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick() {
    console.log("handleClick: called");
    // e.preventDefault();
    // console.log(this.props.index);
    store.dispatch(toggleTodo(this.props.index));
  }

  handleDeleteClick(e) {
    console.log("handleDeleteClick: called");
    e.stopPropagation();
    store.dispatch(deleteTodo(this.props.index));
  }

  render() {
    const icons = {
      trash: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z'
    };
    const TrashIcon = () => (
      <div className="icon" onClick={this.handleDeleteClick}>
        <svg width="15" height="15" viewBox="0 0 1024 1024">
          <path d={icons['trash']}></path>
        </svg>
      </div>
    );
    return (
      <li className={"list-group-item task "+this.props.todo.completed} onClick={this.handleClick}>
        <h6 style={this.props.todo.completed ? {"textDecoration": "line-through"} : {}}>
          {this.props.todo.text}
        </h6>
        <TrashIcon />
      </li>
    )
  }
}

export default Task
