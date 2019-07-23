import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import MyComputer from '../../assets/desktop-icons/MyComputer.png';
import RecycleBin from '../../assets/desktop-icons/RecycleBin.png';
import Notepad from '../../assets/desktop-icons/Notepad.png';
import InternetExplorer from '../../assets/desktop-icons/InternetExplorer.png';
import GitHub from '../../assets/desktop-icons/GitHub.png';
import About from '../../assets/desktop-icons/About.png';

const StyledIcons = styled.div`
  display: inline-block;
`;

function Icons() {
  const icons = [
    { label: 'My Computer', img: MyComputer },
    { label: 'Recycle Bin', img: RecycleBin },
    { label: 'Notepad', img: Notepad },
    { label: 'Internet Explorer', img: InternetExplorer },
    { label: 'GitHub Repo', img: GitHub },
    { label: 'About', img: About },
  ];

  return (
    <StyledIcons>
      {icons.map(({ label, img }, index) =>
        <Icon key={index} label={label} img={img} />
      )}
    </StyledIcons>
  );
}

export default Icons;