import React from 'react';
import styled from 'styled-components';

const StyledButtonInside = styled.div`
  border: 1px dotted transparent;
  padding: ${props => props.padding ? props.padding : '0 15px'};
  display: flex;
`;

const StyledButton = styled.button`
  box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
  border: none;
  padding: 3px;
  background: ${props => props.theme.main};
  
  ${props => props.pressed && `
    box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
  `};
  
  &:focus {
    box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
      rgba(0, 0, 0, 0.4) 0px 0px 0 1.5px inset, rgb(0, 0, 0) 1px 1px 0px 1px;
  }
  
  &:active {
    box-shadow: rgb(255, 255, 255) 1px 1px 0 1px, rgb(0, 0, 0) 1px 1px 0px 1px inset;
  }
  
  &:focus ${StyledButtonInside} {
    border-color: black;
  }
`;

function Button({ children, clicked, padding, pressed }) {
  return (
    <StyledButton onClick={clicked} pressed={pressed}>
      <StyledButtonInside padding={padding}>{children}</StyledButtonInside>
    </StyledButton>
  );
}

export default Button;