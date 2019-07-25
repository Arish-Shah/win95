import React from 'react';
import styled from 'styled-components';
import shutdown from '../assets/shutdown/shutdown.png';

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

  img {
    width: 650px;
  }

  @media (min-width: 600px) {
    
  }
`;


function ShutDown() {
  return (
    <StyledShutDown>
      <img src={shutdown} alt="Shutdown" draggable="false" />
    </StyledShutDown>
  );
}

export default ShutDown;