import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 36px;
    height: 36px;
  }

  span {
    color: rgb(255, 255, 255);
    font-size: 11px;
  }
`;

function Icon({ label, img }) {
  return (
    <StyledIcon>
      <img src={img} alt={label} />
      <span>{label}</span>
    </StyledIcon>
  );
}

export default Icon;