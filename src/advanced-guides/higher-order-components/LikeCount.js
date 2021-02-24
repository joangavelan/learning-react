import React, { Component } from 'react'
import HOC from './HOC';

class LikeCount extends Component {
  render() {
    return (
      <div>
        {this.props.count}<br/>
        <button onClick={this.props.onClick}>
          Like 👍
        </button>
      </div>
    )
  }
}

const EnhancedLikes = HOC(LikeCount, 5)

export default EnhancedLikes;