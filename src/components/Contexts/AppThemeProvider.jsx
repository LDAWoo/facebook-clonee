import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

export const ThemeContext = createContext()
function AppThemeProvider({children}){
    const[isDarkMode,setIsDarkMode] = useState('light')

    useEffect(() =>{
        const storedTheme = localStorage.getItem('theme');
        setIsDarkMode(storedTheme)
    },[])

    return (
      <ThemeContext.Provider 
      value={{
        isDarkMode,
        setIsDarkMode
      }}
      >
        <div className={isDarkMode}>{children}</div>
      </ThemeContext.Provider>
    )
} 

AppThemeProvider.propTypes ={
    children: PropTypes.node.isRequired
}

export default AppThemeProvider;