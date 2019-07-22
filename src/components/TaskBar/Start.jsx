import React from 'react';
import styled from 'styled-components';

import Programs from '../../assets/start-icons/Programs.png';
import Documents from '../../assets/start-icons/Documents.png';
import Settings from '../../assets/start-icons/Settings.png';
import Find from '../../assets/start-icons/Find.png';
import Help from '../../assets/start-icons/Help.png';
import Run from '../../assets/start-icons/Run.png';
import ShutDown from '../../assets/start-icons/ShutDown.png';

const StyledStart = styled.div`
  left: 0;
  bottom: 28px;
  height: auto;
  position: absolute;
  background-color: ${props => props.theme.main};
  border-top: 2px solid rgba(255, 255, 255, 1);
  border-left: 2px solid rgba(255, 255, 255, 1);
  border-right: 2px solid rgba(0, 0, 0, 1);
  border-bottom: 2px solid rgba(0, 0, 0, 1);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Vertical = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255);
  font-size: 20px;
  width: 35px;
  
  span {
    display: inline-block;
    transform-origin: 0 0;
    transform: rotate(270deg) !important;
    color: rgb(220, 220, 220);
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    bottom: -25px;
  }
  
  span strong {
    font-size: 25px;
    font-family: Arial Black;
  }
`;

const AllPrograms = styled.div`
  display: flex;
  flex-direction: column;  
`;

const ProgramGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 180px;
  padding: 5px 0 5px 5px;
  
  &:last-child {
    border-top: 1px solid gray;
    padding: 8px 0 8px 5px;
  }

  &:hover {
    background: ${props => props.theme.blue};
    color: rgba(255, 255, 255);
  }

  img {
    margin-right: 10px;
  }

  span {
    flex: 2;
    padding-right: 10px;
    display: block;
    text-align: right;
    font-size: 9px;
  }
`;


function Start() {
  const allPrograms = [
    { text: 'Programs', img: Programs, showArrow: true },
    { text: 'Documents', img: Documents, showArrow: true },
    { text: 'Settings', img: Settings, showArrow: true },
    { text: 'Find', img: Find, showArrow: true },
    { text: 'Help', img: Help, showArrow: false },
    { text: 'Run...', img: Run, showArrow: false },
    { text: 'Shut Down...', img: ShutDown, showArrow: false },
  ];

  return (
    <StyledStart>
      <StyledContainer>

        <Vertical><span><strong>Windows</strong>95</span></Vertical>

        <AllPrograms>
          {allPrograms.map(({ text, img, showArrow }, index) =>
            <ProgramGroup key={index}>
              <img src={img} alt={text} />
              {text}
              {showArrow ? <span>▶</span> : null}
            </ProgramGroup>
          )}
        </AllPrograms>

      </StyledContainer>
    </StyledStart>
  );
}

export default Start;