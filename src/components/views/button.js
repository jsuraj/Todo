import React from 'react'
import store from '../../store'
import {setActiveButton} from '../../actions/actionCreators'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    // console.log('handleClick called');
    // console.log('handleButtonClick index: '+this.props.index);
    store.dispatch(setActiveButton(this.props.index));
  }

  render() {
    if(this.props.index === this.props.active) {
      return (
        <button type="button" className="btn btn-secondary active" onClick={this.handleButtonClick}>{this.props.buttonName}</button>
      )
    } else{
      return (
        <button type="button" className="btn btn-secondary" onClick={this.handleButtonClick} >{this.props.buttonName}</button>
      )
    }
  }
}

export default Button;
