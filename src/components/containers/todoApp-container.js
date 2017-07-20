import React from 'react'
import AddBar from '../views/addBar'
import TaskList from '../views/taskList'
import {PageHeader} from 'react-bootstrap'

class TodoApp extends React.Component {
  render() {
    return (
      <div className="app-div">
        <div>
          <PageHeader>TodoApp</PageHeader>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <AddBar />
            <TaskList />
          </div>
        </div>
    </div>
    )
  }
}

export default TodoApp
