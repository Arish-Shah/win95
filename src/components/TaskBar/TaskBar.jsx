import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from '../Button';
import Clock from './Clock';
import Start from './Start';
import { startButtonClicked } from '../../store/actions/actions';
import start from '../../assets/start.png';

const StyledTaskBar = styled.div`
  background-color: ${props => props.theme.main};
  position: absolute;
  width: 100vw;
  bottom: 0;
  padding: 2px 2px 2px 2px;
  height:  29px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255);
`;

const startButtonStyle = {
  fontWeight: 'bold',
  paddingTop: '2px'
}

function TaskBar({ showStart, onStartClick }) {
  return (
    <StyledTaskBar>
      <Button padding="0 0" clicked={() => onStartClick()} pressed={showStart}>
        <img src={start} alt="start" />&nbsp;
        <span style={startButtonStyle}>Start</span>
      </Button>
      {showStart ? <Start /> : null}
      <Clock />
    </StyledTaskBar>
  );
}

const mapStateToProps = (state) => {
  return {
    showStart: state.showStart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => dispatch(startButtonClicked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar);