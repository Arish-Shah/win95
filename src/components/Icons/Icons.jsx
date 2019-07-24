import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { openAbout, openNotepad, openModal } from '../../store/actions/actions';
import Icon from './Icon';
import MyComputer from '../../assets/desktop-icons/MyComputer.png';
import RecycleBin from '../../assets/desktop-icons/RecycleBin.png';
import Notepad from '../../assets/desktop-icons/Notepad.png';
import InternetExplorer from '../../assets/desktop-icons/InternetExplorer.png';
import GitHub from '../../assets/desktop-icons/GitHub.png';
import About from '../../assets/desktop-icons/About.png';

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  padding: 8px;
`;

function Icons({ onOpenAbout, onOpenNotepad, onOpenModal }) {
  const [icons, setIcons] = useState([
    { label: 'My Computer', img: MyComputer, clicked: false },
    { label: 'Recycle Bin', img: RecycleBin, clicked: false },
    { label: 'Notepad', img: Notepad, clicked: false },
    { label: 'Internet Explorer', img: InternetExplorer, clicked: false },
    { label: 'GitHub Repo', img: GitHub, clicked: false },
    { label: 'About', img: About, clicked: false },
  ]);

  useEffect(() => {
    window.addEventListener('click', resetIcons);

    return () => {
      window.removeEventListener('click', resetIcons);
    }
    // eslint-disable-next-line
  }, []);

  function handleClick(label) {
    const index = icons.findIndex(icon => icon.label === label);
    const updatedIcons = [...icons];

    updatedIcons.map(icon => icon.clicked = false);
    updatedIcons[index].clicked = true;
    setIcons(updatedIcons);
  }

  function resetIcons(event) {
    if (!document.querySelector('#Icons').contains(event.target)) {
      reset();
    }
  }

  function reset() {
    const updatedIcons = [...icons];
    updatedIcons.map(icon => icon.clicked = false);
    setIcons(updatedIcons);
  }

  function doubleClicked(label) {
    reset();
    document.querySelector('html').classList.add('loading');
    setTimeout(() => {
      document.querySelector('html').classList.remove('loading');
    }, 800);
    if (label === 'About') {
      onOpenAbout();
    } else if (label === 'Notepad') {
      onOpenNotepad();
    } else if (label === 'GitHub Repo') {
      window.open('https://github.com/Arish-Shah/win95');
    }
    else {
      onOpenModal();
    }
  }

  return (
    <StyledIcons id="Icons">
      {icons.map(({ label, img, clicked }, index) =>
        <Icon key={index}
          label={label}
          img={img}
          clicked={clicked}
          handleClick={handleClick}
          doubleClicked={doubleClicked} />
      )}
    </StyledIcons>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenAbout: () => dispatch(openAbout()),
    onOpenNotepad: () => dispatch(openNotepad()),
    onOpenModal: () => dispatch(openModal())
  }
}

export default connect(null, mapDispatchToProps)(Icons);