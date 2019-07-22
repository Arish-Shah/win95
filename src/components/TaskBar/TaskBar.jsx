import React from 'react';
import styled from 'styled-components';

import start from '../../assets/start.png';
import Button from '../Button';
import Clock from './Clock';

const StyledTaskBar = styled.div`
  background-color: ${props => props.theme.main};
  position: absolute;
  width: 100vw;
  bottom: 0;
  padding: 2px 2px 2px 2px;
  height:  29px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255);
`;

function TaskBar() {
  function handleStartClick() {
    console.log();
  }

  return (
    <StyledTaskBar>
      <Button padTB="0" padRL="0" clicked={handleStartClick}>
        <img src={start} alt="start" />&nbsp;
        <span style={{ fontWeight: 'bold', paddingTop: '2px' }}>Start</span>
      </Button>
      <Clock />
    </StyledTaskBar>
  );
}

export default TaskBar;