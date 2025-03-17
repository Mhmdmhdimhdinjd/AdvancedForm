import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
      document.getElementById('root').classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.getElementById('root').classList.toggle('dark');
  };

  const toggleOffcanvas = () => setIsOpen(!isOpen);


  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme ,toggleOffcanvas , isOpen}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);