import styled from 'styled-components';

export const StyledStart = styled.div`
  z-index: 1000;
  left: 2px;
  bottom: 28px;
  height: auto;
  position: absolute;
  background-color: rgb(195, 199, 203);
  border-top: 2px solid rgba(255, 255, 255, 1);
  border-left: 2px solid rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.7) -2px -2px 1px inset;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Vertical = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255);
  font-size: 20px;
  width: 35px;
  
  span {
    display: inline-block;
    transform-origin: 0 0;
    transform: rotate(270deg) !important;
    color: rgb(220, 220, 220);
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    bottom: -25px;
  }
  
  span strong {
    font-size: 25px;
    font-family: Arial Black, Arial Bold, Gadget, sans-serif;
    font-weight: 700;
  }
`;

export const AllPrograms = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const ProgramGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 180px;
  padding: 5px 0 5px 5px;
  
  &:last-child {
    border-top: 1px solid gray;
    padding: 8px 0 8px 5px;
  }

  &:hover {
    background: rgb(0, 0, 127);
    color: rgba(255, 255, 255);
  }

  img {
    margin-right: 10px;
  }

  span {
    flex: 2;
    padding-right: 10px;
    display: block;
    text-align: right;
    font-size: 9px;
  }

  em {
    font-style: normal;
  }

  em::first-letter {
    text-decoration: underline;
  }
`;

