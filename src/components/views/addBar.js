import React from 'react'

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      inputText : e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    alert('clicked'+this.state.inputText);
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add Task" onChange={this.handleInputChange}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button" onClick={this.handleClick}>Add</button>
        </span>
      </div>
    )
  }
}

export default AddBar
