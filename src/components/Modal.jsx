import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  margin-top: -30vh;
  width: 300px;
  background-color: rgb(195, 199, 203);
`;

function Modal() {
  return (
    <ModalBackdrop>
      <StyledDiv>
        This is the modal;
      </StyledDiv>
    </ModalBackdrop>
  );
}

export default Modal;