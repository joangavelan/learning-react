import React, { Component } from 'react'
import Feedback from './Feedback'

export class ForRefDemo extends Component {
  constructor(props) {
    super(props);
    this.feedback = React.createRef();
  }

  handlePurchase = () => {
    this.feedback.current.textContent = 'Payment received! Your new MacBook Pro will arrive in 7 business days. Thank you!';
  }

  render() {
    return (
      <div>
        <Feedback ref={this.feedback}/>
        <button onClick={this.handlePurchase}>Purchase</button>
      </div>
    )
  }
}

export default ForRefDemo