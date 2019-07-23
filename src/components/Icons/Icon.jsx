import React from 'react';
import styled from 'styled-components';
import ditherBackground from '../../styles/ditherBackground';

const StyledIcon = styled.div`
  height: 36px;
  width: 36px;
  background-image: url(${props => props.background});
  background-size: 36px auto;
  
  &::after {
    content: undefined;
    display: block;
    width: 36px;
    height: 36px;
    mask-image: ${props => `url(${props.background})`};
    mask-size: 36px 36px;
    ${() => ditherBackground('rgb(0, 0, 127)')};
  }
`;

const StyledIconWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;  
  img {
    width: 36px;
    height: 36px;
  }  
  span {
    color: rgb(255, 255, 255);
    font-size: 11px;
    padding: 1px 2px;
    margin-top: 7px;
    border: 1px solid transparent;
  }
  ${props => props.clicked && `
      span {
        background-color: rgb(0, 0, 127);
        border: 1px dotted rgba(200, 200, 200);
      }
      
      ${StyledIcon}::after {
        content: "";
      }
  `}
`;

function Icon({ handleClick, label, img, clicked, doubleClicked }) {
  return (
    <StyledIconWithLabel onMouseDown={() => handleClick(label)} clicked={clicked} onDoubleClick={() => doubleClicked(label)}>
      <StyledIcon background={img} />
      <span>{label}</span>
    </StyledIconWithLabel>
  );
}

export default Icon;