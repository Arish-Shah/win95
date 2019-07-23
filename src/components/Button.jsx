import React from 'react';
import styled from 'styled-components';

const StyledButtonInside = styled.div`
  border: 1px dotted transparent;
  padding: 0 ${props => props.pad ? props.pad + 'px' : '10px'};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => props.pad ? `auto` : `160px`};

  div {
    display: flex;
    
    span, b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 3px;
    }
  }
`;

const StyledButton = styled.button`
  box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
  border: none;
  padding: 3px;
  background: rgb(195, 199, 203);
  margin-right: 4px;
  height: 100%;
  
  ${props => props.pressed ? `
    box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
    font-weight: bold;
    background-color: #e6e6e6 !important;
    padding: 4px 2px 2px 4px;
  `: ``};
  
  &:focus {
    box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
      rgba(0, 0, 0, 0.4) 0px 0px 0 1.5px inset, rgb(0, 0, 0) 1px 1px 0px 1px;
  }
  
  &:active {
    box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
    padding: 4px 2px 2px 4px;
  }
  
  &:focus ${StyledButtonInside} {
    border-color: black;
  }
`;

function Button({ id, children, pressed, clicked, pad }) {
  return (
    <StyledButton onClick={clicked} pressed={pressed} id={id}>
      <StyledButtonInside pad={pad}>{children}</StyledButtonInside>
    </StyledButton>
  );
}

export default Button;