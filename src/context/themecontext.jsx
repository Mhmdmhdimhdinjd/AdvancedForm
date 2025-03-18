import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.getElementById('root').setAttribute('class', savedTheme);
      // document.getElementById('root').classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.getElementById('root').setAttribute('class', newTheme);
    // document.getElementById('root').classList.toggle('dark');
  };

  const toggleOffcanvas = () => setIsOpen(!isOpen);


  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme ,toggleOffcanvas , isOpen}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);