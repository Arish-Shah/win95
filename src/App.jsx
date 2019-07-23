import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Icons from './components/Icons/Icons';
import TaskBar from './components/TaskBar/TaskBar';
import About from './components/Windows/About';
import Notepad from './components/Windows/Notepad';

const theme = {
  main: 'rgb(195, 199, 203)',
  blue: 'rgb(0, 0, 127)',
}

function App() {
  useEffect(() => {
    window.addEventListener('contextmenu', event => event.preventDefault());
    return () => {
      window.removeEventListener('contextmenu');
    }
  });

  return (
    <div className="App">
      <Icons />
      <About />
      <Notepad />
      <ThemeProvider theme={theme}>
        <TaskBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
