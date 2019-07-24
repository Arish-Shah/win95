import React, { useState, useEffect } from 'react';

import { StyledFrame, TitleBar, ButtonGroup, StyledMenu, StyledBorder } from './FrameStyled';
import minimize from '../../../assets/titlebar-icons/minimize.png';
import maximizeDisabled from '../../../assets/titlebar-icons/maximize-disabled.png';
import close from '../../../assets/titlebar-icons/close.png';

function Frame({ children, id, img, title, blurred, showMenu, width, onMinimize, onExit, isMinimized }) {
  const [coordinates, setCoordinates] = useState({ x: random(), y: random() });
  const [offset, setOffset] = useState({ x: coordinates.x, y: coordinates.y });

  useEffect(() => {
    const frameTitle = document.querySelector('#' + id + ' .title');
    frameTitle.addEventListener('mousedown', dragStart);

    return () => frameTitle.removeEventListener('mousedown', dragStart);
    // eslint-disable-next-line
  }, [offset]);

  function dragStart(event) {
    event.preventDefault();
    window.onmousemove = (e) => dragging(e, { x: event.clientX, y: event.clientY });
    window.onmouseup = dragEnd;
  }

  function dragging(event, axis) {
    event.preventDefault();
    let x = axis.x - event.clientX;
    let y = axis.y - event.clientY;
    setOffset({ x: event.clientX, y: event.clientY });
    setCoordinates({ x: coordinates.x - x, y: coordinates.y - y });

  }

  function dragEnd() {
    window.onmousemove = null;
    window.onmouseup = null;
  }

  function random() {
    return Math.round(Math.random() * 100);
  }

  const menu = showMenu ?
    <StyledMenu>
      <span><u>F</u>ile</span>
      <span><u>E</u>dit</span>
      <span><u>S</u>earch</span>
      <span><u>H</u>elp</span>
    </StyledMenu> : null;

  return (
    <StyledFrame
      left={coordinates.x}
      top={coordinates.y}
      id={id}
      width={width}
      isMinimized={isMinimized}
      blurred={blurred}
    >
      <StyledBorder>
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
      </StyledBorder>

    </StyledFrame >
  );
}

export default Frame;