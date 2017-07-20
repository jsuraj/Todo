import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button type="button" className="btn btn-secondary">{this.props.buttonName}</button>
    )
  }
}

export default Button;
