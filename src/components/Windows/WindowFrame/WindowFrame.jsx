import React, { useState, useEffect } from 'react';

import { BorderFrame, StyledFrame, TitleBar, ButtonGroup, StyledMenu } from './FrameStyled';
import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximizeDisabled from '../../../assets/titlebar-icons/maximize-disabled.png';
import close from '../../../assets/titlebar-icons/close.png';

function Frame({ children, id, x, y, img, title, blurred, showMenu, height, width, onMinimize, onExit, isMinimized }) {
  const [coord, setCoord] = useState({ x: x, y: y });
  const [border, setBorder] = useState({ x: x, y: y, display: 'none' });

  useEffect(() => {
    const titleBar = document.querySelector('#' + id + ' .title');
    titleBar.addEventListener('mousedown', dragStart);

    return () => titleBar.removeEventListener('mousedown', dragStart);
  });

  function dragStart() {
    window.onmousemove = dragging;
    window.onmouseup = () => dragEnd();
    console.log('Starting dragging');
  }

  function dragging() {
    console.log('dragging');

    window.onmouseup = () => dragEnd();
  }

  function dragEnd(msg) {
    window.onmousemove = null;
    window.onmouseup = null;
    console.log(msg);
  }

  const menu = showMenu ?
    <StyledMenu>
      <span><u>F</u>ile</span>
      <span><u>E</u>dit</span>
      <span><u>S</u>earch</span>
      <span><u>H</u>elp</span>
    </StyledMenu> : null;

  return (
    <React.Fragment>
      <BorderFrame
        left={Number(border.x)}
        top={Number(border.y)}
        height={height + 'px'}
        width={width + 'px'}
        display={border.display} />

      <StyledFrame
        left={Number(coord.x)}
        top={Number(coord.y)}
        id={id}
        width={width + 'px'}
        height={height + 'px'}
        isMinimized={isMinimized}
        blurred={blurred}
      >
        <TitleBar blurred={blurred}>
          <img src={img} alt="Window" draggable="false" />

          <span className="title">{title}</span>

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

      </StyledFrame>
    </React.Fragment >
  );
}

export default Frame;