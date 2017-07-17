import React from 'react'
import Task from './task'
import store from '../../store'
import {connect} from 'react-redux'

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    for(var i=0;i<this.props.todos.length;i++) {
      rows.push(<Task todo={this.props.todos[i]} key={Math.random()}/>)
    }
    return (
      <ul className="list-group">
        {rows}
      </ul>
    )
  }
}

function mapStateToProps(store){
  return {
    todos : store.todos
  }
}

export default connect(mapStateToProps)(TaskList)
