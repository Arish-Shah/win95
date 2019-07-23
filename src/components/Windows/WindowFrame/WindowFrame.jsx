import React from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  background-color: rgb(195, 199, 203);
  height: 100px;
  width: 100px;
  position: absolute;
  left: 100px;
  top: 100px;
`;



function Frame() {
  return (
    <StyledFrame>

    </StyledFrame>
  );
}

export default Frame;