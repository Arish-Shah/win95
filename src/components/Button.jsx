import React from 'react';
import styled from 'styled-components';

const StyledButtonInside = styled.div`
  border: 1px dotted transparent;
  padding: ${props => props.padTB ? props.padTB + 'px' : '1px'} ${props => props.padRL ? props.padRL + 'px' : '15px'};
  display: flex;
`;

const StyledButton = styled.button`
  box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
  border: none;
  padding: 3px;
  background: ${props => props.theme.main};
  
  &:focus {
    box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
      rgba(0, 0, 0, 0.4) 0px 0px 0 1.5px inset, rgb(0, 0, 0) 1px 1px 0px 1px;
  }
  
  &:active {
    box-shadow: rgb(0, 0, 0) 0 0 0 1px inset, rgba(0, 0, 0, 0.8) 0 0 1px 1px inset;
  }
  
  &:focus ${StyledButtonInside} {
    border-color: black;
  }
`;

function Button({ clicked, children, padTB, padRL }) {
  return (
    <StyledButton onClick={clicked}>
      <StyledButtonInside padTB={padTB} padRL={padRL}>{children}</StyledButtonInside>
    </StyledButton>
  );
}

export default Button;