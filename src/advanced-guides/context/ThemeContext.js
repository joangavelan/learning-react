import {createContext, useContext} from 'react'
import {useState} from 'react'

const ThemeContext = createContext(); 
const toggleThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const useToggleTheme = () => useContext(toggleThemeContext);

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(theme => !theme);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <toggleThemeContext.Provider value={toggleTheme}>
        {children}
      </toggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}


export default ThemeProvider;