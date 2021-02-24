import React from 'react'
import EnhancedComment from './advanced-guides/higher-order-components/CommentCount'
import EnhancedLikes from './advanced-guides/higher-order-components/LikeCount'
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <EnhancedLikes />
      <EnhancedComment />
    </div>
  )
}

export default App