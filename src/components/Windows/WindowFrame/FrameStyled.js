import styled from 'styled-components';

export const StyledFrame = styled.div`
  background-color: rgb(195, 199, 203);
  height: 100px;
  width: auto;
  position: absolute;
  box-shadow: rgb(0, 0, 0) -1.5px -1.5px 0.5px inset, 
    rgba(255, 255, 255, 0.8) 2px 2px 1px inset;
    left: ${props => props.x + 'px'};
    top: ${props => props.y + 'px'};   
    z-index: ${props => props.blurred ? `4` : `7`};                                                     
    padding: 3px 4px 3px 3px;
`;

export const TitleBar = styled.div`
  background-color: ${props => props.blurred ? `rgb(0, 0, 0, 0.4)` : `rgb(0, 0, 127)`};
  color: ${props => props.blurred ? `rgb(200, 200, 200)` : `rgb(255, 255, 255)`};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 2px;

  span {
    padding-left: 4px;
    font-size: 11px;
    flex: 5;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 200px;

  button {
    text-align: center;
    margin-left: 2px;
    background-color: rgb(195, 199, 203);
    border: none;
    box-shadow: rgb(0, 0, 0) -1px -1px 1px inset, 
      rgba(255, 255, 255, 0.8) 2px 2px 0 inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px;
    
    }
    .clickable:active {
      box-shadow: rgb(0, 0, 0) 1px 1px 1px inset,
        rgba(255, 255, 255, 0.8) -1px -1px 0 inset;
      padding: 2.5px 1.5px 1.5px 2.5px;
  }
  button img {
    width: 13px;
  }
`;

export const StyledMenu = styled.div`

`;