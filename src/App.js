import { useState, createContext, useEffect } from 'react';
import './App.css';
import { Contact } from './components/Contact/Location/Contact';
import MapboxFriendlyPC from './components/Contact/Location/MapboxFriendlyPC';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import './theme/theme.scss';

// Theme dark mode

export const ThemeContext = createContext(
  {
    themeValue: null,
    setThemeValue: (boLValue) => { },

    language: null,
    setLanguage: () => { },
  }
);

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'VI');

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])
  return (

    //* Theme dark mode *
    <ThemeContext.Provider value={{
      themeValue: theme,
      setThemeValue: (boLValue) => { setTheme(boLValue) },
      language: language,
      setLanguage: (language) => { setLanguage(language) }
    }}>

      <div className={`App ${theme}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
