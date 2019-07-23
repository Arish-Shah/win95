import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Icon from './Icon';
import MyComputer from '../../assets/desktop-icons/MyComputer.png';
import RecycleBin from '../../assets/desktop-icons/RecycleBin.png';
import Notepad from '../../assets/desktop-icons/Notepad.png';
import InternetExplorer from '../../assets/desktop-icons/InternetExplorer.png';
import GitHub from '../../assets/desktop-icons/GitHub.png';
import About from '../../assets/desktop-icons/About.png';
import { startBlur } from '../../store/actions/actions';

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  padding: 8px;
`;

function Icons({ onStartBlur }) {
  const [icons, setIcons] = useState([
    { label: 'My Computer', img: MyComputer, clicked: false },
    { label: 'Recycle Bin', img: RecycleBin, clicked: false },
    { label: 'Notepad', img: Notepad, clicked: false },
    { label: 'Internet Explorer', img: InternetExplorer, clicked: false },
    { label: 'GitHub Repo', img: GitHub, clicked: false },
    { label: 'About', img: About, clicked: false },
  ]);

  useEffect(() => {
    window.addEventListener('click', event => {
      if (!document.querySelector('#Icons').contains(event.target)) { resetIcons(); }
    });

    return () => {
      window.removeEventListener('click');
    }
  }, []);

  function handleClick(label) {
    onStartBlur();
    const index = icons.findIndex(icon => icon.label === label);
    const updatedIcons = [...icons];

    updatedIcons.map(icon => icon.clicked = false);
    updatedIcons[index].clicked = true;
    setIcons(updatedIcons);
  }

  function resetIcons() {
    const updatedIcons = [...icons];
    updatedIcons.map(icon => icon.clicked = false);
    setIcons(updatedIcons);
  }

  return (
    <StyledIcons id="Icons">
      {icons.map(({ label, img, clicked }, index) =>
        <Icon key={index}
          label={label}
          img={img}
          clicked={clicked}
          handleClick={handleClick} />
      )}
    </StyledIcons>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartBlur: () => dispatch(startBlur())
  }
}

export default connect(null, mapDispatchToProps)(Icons);