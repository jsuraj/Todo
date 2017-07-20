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
             <Button buttonName="All" index={0} active={this.props.active} />
             <Button buttonName="Active" index={1} active={this.props.active} />
             <Button buttonName="Completed" index={2} active={this.props.active} />
           </div>;
  }

  getTodos(index) {
    console.log('getTodos: '+index);
      var rows = []
      switch (index) {
        case 0:
          console.log('case 0');
          for(var i=0;i<this.props.todos.length;i++) {
            rows.push(<Task todo={this.props.todos[i]} key={Math.random()} index={i} />)
          }
          break;
        case 1:
          console.log('case 1');
          for(var i=0;i<this.props.todos.length;i++) {
            if(this.props.todos[i].completed === false) {
              rows.push(<Task todo={this.props.todos[i]} key={Math.random()} index={i} />)
            }
          }
          break;
        case 2:
          console.log('case 2');
          for(var i=0;i<this.props.todos.length;i++) {
            if(this.props.todos[i].completed === true) {
              rows.push(<Task todo={this.props.todos[i]} key={Math.random()} index={i} />)
            }
          }
          break;
      }
      return rows;
  }

  render() {
    var rows = [];
    var buttons = '';

    rows = this.getTodos(this.props.active);
    console.log('rows: '+rows);

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
    todos : store.todos,
    active : store.activeButton
  }
}

export default connect(mapStateToProps)(TaskList)
