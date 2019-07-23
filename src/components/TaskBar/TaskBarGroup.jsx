import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button';
import start from '../../assets/taskbar-icons/start.png';
import notepadImage from '../../assets/taskbar-icons/notepad.png';
import aboutImage from '../../assets/taskbar-icons/about.png';
import errorImage from '../../assets/taskbar-icons/error.png';
import { startButtonClicked, openAbout, openNotepad } from '../../store/actions/actions';

const StyledTaskBarGroup = styled.div`
  height: 100%;
  display: inline-block;
`;

const StyledGroup = styled.div`
  height: 100%;
  display: flex;
`;

function TaskBarGroup({ showStart, about, notepad, showModal, onStartClick, onNotepadClick, onAboutClick }) {
  const notepadButton = notepad.show ?
    <Button
      pressed={!notepad.minimized && !notepad.blurred}
      clicked={() => onNotepadClick()}>
      <div>
        <img src={notepadImage} alt="notepad" />
        <span>Untitled - Notepad</span>
      </div>
    </Button> : null;

  const aboutButton = about.show ?
    <Button
      pressed={!about.minimized && !about.blurred}
      clicked={() => onAboutClick()}>
      <div>
        <img src={aboutImage} alt="about" />
        <span>About this Project</span>
      </div>
    </Button> : null;

  const modalButton = showModal ?
    <Button pressed={showModal}>
      <div>
        <img src={errorImage} alt="error" />
        <span>Unspecified Error</span>
      </div>
    </Button> : null;

  return (
    <StyledTaskBarGroup>
      <StyledGroup>

        <Button id="StartButton"
          clicked={() => onStartClick()}
          pressed={showStart} pad="0">
          <div>
            <img src={start} alt="start" />
            <b>Start</b>
          </div>
        </Button>

        {notepadButton}
        {aboutButton}
        {modalButton}

      </StyledGroup>
    </StyledTaskBarGroup>

  );
}

const mapStateToProps = (state) => {
  return {
    showStart: state.showStart,
    about: state.about,
    notepad: state.notepad,
    showModal: state.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => dispatch(startButtonClicked()),
    onAboutClick: () => dispatch(openAbout()),
    onNotepadClick: () => dispatch(openNotepad())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskBarGroup);