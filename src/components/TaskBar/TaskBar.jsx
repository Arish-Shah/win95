import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Clock from './Clock';
import Start from './Start';
import TaskBarGroup from './TaskBarGroup';

const StyledTaskBar = styled.div`
  background-color: rgb(195, 199, 203);
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding: 3px;
  height:  30px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255);
`;

function TaskBar({ showStart }) {
  return (
    <StyledTaskBar>
      <TaskBarGroup />
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

export default connect(mapStateToProps)(TaskBar);