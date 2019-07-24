import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import WindowFrame from './WindowFrame/WindowFrame';
import { focusNotepad, blurNotepad, minimizeNotepad } from '../../store/actions/actions';
import notepadImage from '../../assets/taskbar-icons/notepad.png';

function Notepad({ notepad, onNotepadFocus, onNotepadBlur, onNotepadMinimize }) {
  const [text, setText] = useState('');
  const inputRef = React.createRef();

  useEffect(() => {
    window.addEventListener('click', notepadBlur);
    inputRef.current.focus();

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
        width="500"
        img={notepadImage}
        title="Untitled - Notepad"
        blurred={notepad.blurred}
        showMenu={true}>
        <div
          className="Notepad"
          contentEditable="true"
          value={text}
          onChange={e => setText(e.target.value)}
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
    onNotepadMinimize: () => dispatch(minimizeNotepad()),
    onNotepadFocus: () => dispatch(focusNotepad())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);