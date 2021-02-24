import React, { Component } from 'react'
import HOC from './HOC'

export class CommentCount extends Component {
  render() {
    return (
      <div>
          Total comments: {this.props.count} <br/>
        <button onClick={this.props.onClick}>
          Add Comment!
        </button>
      </div>
    )
  }
}

const EnhancedComment = HOC(CommentCount, 10);

export default EnhancedComment
