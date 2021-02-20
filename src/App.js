import React from 'react'
import Main from './advanced-guides/context/Main'
import ErrorBoundary from './advanced-guides/Error-Boundaries'

const App = () => {
  return (
    <div className='app'>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </div>
  )
}

export default App