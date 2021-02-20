import React from 'react'
import {useTheme, useToggleTheme} from './ThemeContext'

const FunctionComponent = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  const styles = {
    backgroundColor: theme ? '#777' : 'wheat',
    color: theme ? 'white' : '#555',
    margin: '2rem',
    padding: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
      <div style={styles}>Theme</div>
    </>
  );
}

export default FunctionComponent;