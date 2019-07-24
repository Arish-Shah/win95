import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Icons from './components/Icons/Icons';
import TaskBar from './components/TaskBar/TaskBar';
import About from './components/Windows/About';
import Notepad from './components/Windows/Notepad';
import ShutDown from './components/ShutDown';
import Modal from './components/Modal';

// const theme = {
//   main: 'rgb(195, 199, 203)',
//   blue: 'rgb(0, 0, 127)',
// }

function App({ aboutVisible, notepadVisible, shutDown, showModal }) {
  useEffect(() => {
    window.addEventListener('contextmenu', contextDisable);
    return () => {
      window.removeEventListener('contextmenu', contextDisable);
    }
  }, []);

  function contextDisable(event) { event.preventDefault(); }

  const aboutDisplay = aboutVisible ? <About /> : null;
  const notepadDisplay = notepadVisible ? <Notepad /> : null;
  const shutDownDisplay = shutDown ? <ShutDown /> : null;
  const modalDisplay = showModal ? <Modal /> : null;

  return (
    <div className="App">
      <Icons />
      {aboutDisplay}
      {notepadDisplay}
      {shutDownDisplay}
      {modalDisplay}
      <TaskBar />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    aboutVisible: state.about.show,
    notepadVisible: state.notepad.show,
    shutDown: state.shutDown,
    showModal: state.showModal
  }
}

export default connect(mapStateToProps)(App);
