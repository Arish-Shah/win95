import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { exitModal } from '../store/actions/actions';
import { StyledFrame, TitleBar, ButtonGroup } from './Windows/WindowFrame/FrameStyled';
import Button from './Button';
import warningIcon from '../assets/icons/warning.png';
import close from '../assets/titlebar-icons/close-disabled.png';

const ModalBackdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Frame = styled(StyledFrame)`
  margin-top: -10vh;
  padding-bottom: 15px;
`;

const BlinkingTitleBar = styled(TitleBar)`
  animation: backColor .15s;
  animation-iteration-count: 5;

  @keyframes backColor {
    0% {background-color: rgb(0, 0, 127); color: rgb(255, 255, 255);}
    50% {background-color: rgba(0, 0, 0, 0.4); color: rgb(200, 200, 200)}
  }
`;

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;

  span {
    padding-left: 15px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

function Modal({ onModalExit }) {
  return (
    <ModalBackdrop>
      <Frame width="400">
        <BlinkingTitleBar blurred={false} className="title">
          <span>Warning</span>
          <ButtonGroup>
            <button>
              <img src={close} draggable="false" alt="Close" />
            </button>
          </ButtonGroup>
        </BlinkingTitleBar>

        <StyledContainer>
          <img src={warningIcon} alt="Warning" />
          <span>
            Well that feature is not ready yet.
            You might wanna check out other things like Notepad or Shutting your computer down.
          </span>
        </StyledContainer>

        <ButtonContainer>
          <Button clicked={onModalExit} pad="30">OK</Button>
        </ButtonContainer>

      </Frame>
    </ModalBackdrop>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalExit: () => dispatch(exitModal())
  }
}

export default connect(null, mapDispatchToProps)(Modal);