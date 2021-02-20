import React from 'react'
import ThemeProvider from './ThemeContext'
import FunctionComponent from './Function'

const Main = () => {
  return (
    <ThemeProvider>
      <FunctionComponent />
    </ThemeProvider>
  );
}

export default Main;