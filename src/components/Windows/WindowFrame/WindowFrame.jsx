import React from 'react';

import { StyledFrame, TitleBar, ButtonGroup, StyledMenu } from './FrameStyled';
import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximizeDisabled from '../../../assets/titlebar-icons/maximize-disabled.png';
import close from '../../../assets/titlebar-icons/close.png';

function Frame({ children, id, x, y, img, title, blurred, showMenu, width, onMinimize, onExit, isMinimized }) {
  const menu = showMenu ?
    <StyledMenu>
      <span>File</span>
      <span>Edit</span>
      <span>Search</span>
      <span>Help</span>
    </StyledMenu> : null;

  return (
    <StyledFrame x={x} y={y} id={id} width={width} isMinimized={isMinimized}>
      <TitleBar blurred={blurred} className="title">
        <img src={img} alt="Window" />

        <span>{title}</span>

        <ButtonGroup>
          <button className="clickable" onClick={() => onMinimize()}>
            <img src={minimize} draggable="false" alt="Minimize" />
          </button>

          <button>
            <img src={maximizeDisabled} draggable="false" alt="Maximize" />
          </button>

          <button className="clickable" onClick={() => onExit()}>
            <img src={close} draggable="false" alt="Close" />
          </button>
        </ButtonGroup>

      </TitleBar>

      {menu}

      {children}

    </StyledFrame >
  );
}

export default Frame;