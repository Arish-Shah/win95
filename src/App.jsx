import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import TaskBar from './components/TaskBar/TaskBar';

const theme = {
  main: 'rgb(195, 199, 203)',
  blue: 'rgb(0, 0, 127)',
}

function App() {
  useEffect(() => {
    document.addEventListener('contextmenu', e => e.preventDefault());
    return () => {
      document.removeEventListener('contextmenu');
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TaskBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
