import React from 'react'
import AddBar from '../views/addBar'
import TaskList from '../views/taskList'

class TodoApp extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <AddBar />
          <TaskList />
        </div>
      </div>
    )
  }
}

export default TodoApp
