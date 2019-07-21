import React from 'react';
import styled from 'styled-components';

const StyledTaskBar = styled.div`
  background-color: red;
`;

function TaskBar() {
  return (
    <StyledTaskBar>
      Tray is here
    </StyledTaskBar>
  );
}

export default TaskBar;