import React from 'react';
import { connect } from 'react-redux';

function Notepad({ notepad }) {
  const displayContent =
    notepad.show && !notepad.minimized ?
      "This is notepad" : null;

  return displayContent;
}

const mapStateToProps = (state) => {
  return {
    notepad: state.notepad
  }
}

export default connect(mapStateToProps)(Notepad);