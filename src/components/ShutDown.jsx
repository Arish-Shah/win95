import React from 'react';
import styled from 'styled-components';

const StyledShutDown = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: rgb(229,121,46);
    font-size: 4rem;
    width: 600px;
    text-align: center;
  }
`;


function ShutDown() {
  return (
    <StyledShutDown>
      <h1>It's now safe to turn off your computer.</h1>
    </StyledShutDown>
  );
}

export default ShutDown;