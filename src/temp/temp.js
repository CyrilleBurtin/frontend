'use client';

import React, { useContext } from 'react';

let ThemeContext = React.createContext(); // Do no modify this line

const Content = () => {
  const context = useContext(ThemeContext); // change this

  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
};

function App() {
  const [theme, setTheme] = React.useState('dark');
  const switchTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
