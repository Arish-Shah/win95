import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { StyledStart, StyledContainer, Vertical, AllPrograms, ProgramGroup } from './StyledTaskBar';
import Programs from '../../assets/start-icons/Programs.png';
import Documents from '../../assets/start-icons/Documents.png';
import Settings from '../../assets/start-icons/Settings.png';
import Find from '../../assets/start-icons/Find.png';
import Help from '../../assets/start-icons/Help.png';
import Run from '../../assets/start-icons/Run.png';
import ShutDown from '../../assets/start-icons/ShutDown.png';
import { startMenuBlur, shutDown, openModal } from '../../store/actions/actions';
import { cursorSetter } from '../../styles/cursorSetter';

function Start({ onStartMenuBlur, onShutDown, onOpenModal }) {
  const allPrograms = [
    { text: 'Programs', img: Programs, showArrow: true },
    { text: 'Documents', img: Documents, showArrow: true },
    { text: 'Settings', img: Settings, showArrow: true },
    { text: 'Find', img: Find, showArrow: true },
    { text: 'Help', img: Help, showArrow: false },
    { text: 'Run...', img: Run, showArrow: false },
    { text: 'Shut Down...', img: ShutDown, showArrow: false },
  ];

  useEffect(() => {
    window.addEventListener('click', startEventHandler);

    return () => {
      window.removeEventListener('click', startEventHandler);
    }

    // eslint-disable-next-line
  }, []);

  function startEventHandler(event) {
    if (!document.querySelector('#Start').contains(event.target)
      && !document.querySelector('#StartButton').contains(event.target)) {
      onStartMenuBlur();
    }
  }

  function handleClick(text) {
    if (text === 'Shut Down...') {
      cursorSetter();
      setTimeout(() => {
        onShutDown();
      }, 3000);
    } else {
      onStartMenuBlur();
      onOpenModal();
    }
  }

  return (
    <StyledStart id="Start">
      <StyledContainer>

        <Vertical><span><strong>Windows</strong>95</span></Vertical>

        <AllPrograms>
          {allPrograms.map(({ text, img, showArrow }, index) =>
            <ProgramGroup key={index} onClick={() => handleClick(text)}>
              <img src={img} alt={text} />
              <em>{text}</em>
              {showArrow ? <span>▶</span> : null}
            </ProgramGroup>
          )}
        </AllPrograms>

      </StyledContainer>
    </StyledStart>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartMenuBlur: () => dispatch(startMenuBlur()),
    onShutDown: () => dispatch(shutDown()),
    onOpenModal: () => dispatch(openModal())
  };
}

export default connect(null, mapDispatchToProps)(Start);