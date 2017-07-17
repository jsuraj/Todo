import React from 'react'

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.todo.text}
      </li>
    )
  }
}

export default Task
