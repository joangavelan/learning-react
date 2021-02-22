import React, { Component } from 'react'
import Input from './Input'

class ParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <Input ref={this.inputRef}/>
        <button onClick={this.handleClick}>Focus Input</button>
      </>
    )
  }
}

export default ParentInput