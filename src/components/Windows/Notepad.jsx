import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import WindowFrame from './WindowFrame/WindowFrame';
import { focusNotepad, blurNotepad, minimizeNotepad } from '../../store/actions/actions';
import notepadImage from '../../assets/taskbar-icons/notepad.png';

function Notepad({ notepad, onNotepadFocus, onNotepadBlur, onNotepadMinimize }) {
  useEffect(() => {
    window.addEventListener('click', notepadBlur);
    return () => window.removeEventListener('click', notepadBlur);
  });

  function notepadBlur(event) {
    if (!document.querySelector('#Notepad').contains(event.target)) {
      onNotepadBlur();
    } else { onNotepadFocus(); }
  }

  const displayContent =
    notepad.show && !notepad.minimized ?
      <WindowFrame
        id="Notepad"
        x="200"
        y="100"
        img={notepadImage}
        title="NotePad"
        blurred={notepad.blurred}
        showMenu={true}
      /> : null;

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
    onNotepadMinimize: () => dispatch(minimizeNotepad()),
    onNotepadFocus: () => dispatch(focusNotepad())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);