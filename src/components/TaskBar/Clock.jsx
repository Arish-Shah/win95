import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledClock = styled.div`
  float: right;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 1px 1.5px 1.5px 1px;
  border-color: rgba(0, 0, 0, 0.5) rgba(255, 255, 255) rgb(255, 255, 255) rgba(0, 0, 0, 0.5);
  border-style: solid;
  width: 63px;
`;

function Clock() {
  const [time, setTime] = useState({ hour: '', min: '', AMPM: '' })

  useEffect(() => {
    getTime();
    setInterval(getTime, 30000);
  }, []);

  function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    let AMPM = date.getHours() >= 12 ? 'PM' : 'AM';
    setTime({ hour, min, AMPM });
  }

  return (
    <StyledClock>{`${time.hour}:${time.min} ${time.AMPM}`}</StyledClock>
  );
}

export default Clock;