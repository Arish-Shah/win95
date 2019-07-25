import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import WindowFrame from './WindowFrame/WindowFrame';
import { focusNotepad, blurNotepad, minimizeNotepad, exitNotepad } from '../../store/actions/actions';
import notepadImage from '../../assets/taskbar-icons/notepad.png';

function Notepad({ notepad, onNotepadFocus, onNotepadBlur, onNotepadMinimize, onNotepadExit }) {
  const inputRef = React.createRef();

  useEffect(() => {
    window.addEventListener('click', notepadBlur);
    //inputRef.current.focus();

    return () => window.removeEventListener('click', notepadBlur);
    // eslint-disable-next-line
  }, []);

  function notepadBlur(event) {
    if (!document.querySelector('#Notepad').contains(event.target) &&
      !document.querySelector('#notepad-button').contains(event.target)) {
      onNotepadBlur();
    } else { onNotepadFocus(); }
  }

  const displayContent =
    notepad.show ?
      <WindowFrame
        id="Notepad"
        x="300"
        y="100"
        width="600"
        img={notepadImage}
        title="Untitled - Notepad"
        blurred={notepad.blurred}
        showMenu={true}
        onMinimize={onNotepadMinimize}
        onExit={onNotepadExit}
        isMinimized={notepad.minimized}>
        <div
          className="Notepad"
          contentEditable="true"
          ref={inputRef}
        />
      </WindowFrame> : null;

  return displayContent;
}

const mapStateToProps = (state) => {
  return {
    notepad: state.notepad
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNotepadBlur: () => dispatch(blurNotepad()),
    onNotepadFocus: () => dispatch(focusNotepad()),
    onNotepadMinimize: () => dispatch(minimizeNotepad()),
    onNotepadExit: () => dispatch(exitNotepad()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);