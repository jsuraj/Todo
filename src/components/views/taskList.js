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
    var buttons = '';
    for(var i=0;i<this.props.todos.length;i++) {
      rows.push(<Task todo={this.props.todos[i]} key={Math.random()} index={i}/>)
    }
    if(this.props.todos.length>0) {
      buttons = <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary active">All</button>
                  <button type="button" className="btn btn-secondary">Active</button>
                  <button type="button" className="btn btn-secondary">Done</button>
                </div>;
    }
    return (
      <div>
        <ul className="list-group">
          {rows}
        </ul>
        <div>
          {buttons}
        </div>
      </div>
    )
  }
}

function mapStateToProps(store){
  return {
    todos : store.todos
  }
}

export default connect(mapStateToProps)(TaskList)
