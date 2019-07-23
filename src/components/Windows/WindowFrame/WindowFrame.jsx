import React from 'react';

import { StyledFrame, TitleBar, ButtonGroup, StyledMenu } from './FrameStyled';
import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximizeDisabled from '../../../assets/titlebar-icons/maximize-disabled.png';
import close from '../../../assets/titlebar-icons/close.png';

function Frame({ id, x, y, img, title, blurred, showMenu }) {
  const menu = showMenu ?
    <StyledMenu>

    </StyledMenu> : null;

  return (
    <StyledFrame x={x} y={y} id={id} blurred={blurred}>
      <TitleBar blurred={blurred}>
        <img src={img} alt="Window" />

        <span>{title}</span>

        <ButtonGroup>
          <button className="clickable">
            <img src={minimize} draggable="false" alt="Minimize" />
          </button>

          <button>
            <img src={maximizeDisabled} draggable="false" alt="Maximize" />
          </button>

          <button className="clickable">
            <img src={close} draggable="false" alt="Close" />
          </button>
        </ButtonGroup>

      </TitleBar>

      {menu}

    </StyledFrame >
  );
}

export default Frame;