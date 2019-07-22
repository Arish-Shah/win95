import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button';
import start from '../../assets/start.png';
import { startButtonClicked } from '../../store/actions/actions';

const StyledTaskBarGroup = styled.div`
  height: 100%;
  display: inline-block;
`;

const StyledGroup = styled.div`
  height: 100%;
  display: flex;
`;

function TaskBarGroup({ showStart, onStartClick }) {
  return (
    <StyledTaskBarGroup>
      <StyledGroup>
        {/* 
      <Button padding="0 0" clicked={() => onStartClick()} pressed={showStart}>
        <img src={start} alt="start" />&nbsp;
        <span style={startButtonStyle}>Start</span>
      </Button> */}

        <Button clicked={() => onStartClick()} pressed={showStart} pad="0">
          <div>
            <img src={start} alt="start" />
            <b>Start</b>
          </div>
        </Button>

        <Button>
          <div>
            <img src={start} alt="start" />
            <span>Untitled - Notepad</span>
          </div>
        </Button>

        <Button>
          <div>
            <img src={start} alt="start" />
            <span>About this Project</span>
          </div>
        </Button>

      </StyledGroup>
    </StyledTaskBarGroup>

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


export default connect(mapStateToProps, mapDispatchToProps)(TaskBarGroup);