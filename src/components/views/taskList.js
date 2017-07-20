import React from 'react'
import Task from './task'
import store from '../../store'
import {connect} from 'react-redux'
import Button from './button'

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  getButtons() {
    return <div className="btn-group" role="group" aria-label="Basic example">
             <Button buttonName="All" />
             <Button buttonName="Active" />
             <Button buttonName="Completed" />
           </div>;
  }

  getTodos(index) {
      var rows = []
      switch (index) {
        case 0:
          for(var i=0;i<this.props.todos.length;i++) {
            rows.push(<Task todo={this.props.todos[i]} key={Math.random()} index={i} />)
          }
      }
      return rows;
  }

  render() {
    var rows = [];
    var buttons = '';

    rows = this.getTodos(0);
    if(this.props.todos.length>0) {
      buttons = this.getButtons();

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
