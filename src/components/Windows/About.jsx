import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import WindowFrame from './WindowFrame/WindowFrame';
import { focusAbout, blurAbout, minimizeAbout, exitAbout } from '../../store/actions/actions';
import aboutImage from '../../assets/taskbar-icons/about.png';
import Button from '../Button';
import windows from '../../assets/about-images/windows.png';

const StyledContainer = styled.div`
  padding: 15px;
  .images img {
    width: 80px;
    height: 90px;  
  }
  .container {
    display: flex;
    .text {
      padding-left: 15px;
      flex: 2;
      line-height: 18px;
      a {
        text-decoration: underline;
        color: rgb(0, 0, 127);
      }
      h1 {
        font-size: 15px;
        margin: 0;
      }
    }
  }
  .button-container {
    padding-top: 15px;
    text-align: right;
  }
`;


function About({ about, onAboutFocus, onAboutBlur, onAboutMinimize, onAboutExit }) {
  useEffect(() => {
    window.addEventListener('click', aboutBlur);
    return () => window.removeEventListener('click', aboutBlur);
    // eslint-disable-next-line
  }, []);

  function aboutBlur(event) {
    if (!document.querySelector('#About').contains(event.target) &&
      !document.querySelector('#about-button').contains(event.target)) {
      onAboutBlur();
    } else { onAboutFocus(); }
  }


  const displayContent =
    about.show ?
      <WindowFrame
        id="About"
        x="100"
        y="50"
        width="400"
        img={aboutImage}
        title="About Windows"
        blurred={about.blurred}
        showMenu={false}
        onMinimize={onAboutMinimize}
        onExit={onAboutExit}
        isMinimized={about.minimized}>

        <StyledContainer>
          <div className="container">
            <div className="images">
              <img src={windows} alt="Windows" draggable="false" />
            </div>
            <div className="text">

              Microsoft Windows <br />
              Windows 95 <br />
              Copyright &copy; 1981-1995 Microsoft Corp. <br /><br />

              Built By:
              <h1>Arish Rahil Shah</h1>
              GitHub: <a href="https://github.com/Arish-Shah" target="_blank" rel="noopener noreferrer">@Arish-Shah</a> <br />
              Twitter: <a href="https://twitter.com/Arish_Shah" target="_blank" rel="noopener noreferrer">@Arish_Shah</a>
              <hr />
              Created using: <br />
              React, Redux and Styled Components.
            </div>
          </div>
          <div className="button-container">
            <Button pad="35" clicked={onAboutExit}>OK</Button>
          </div>
        </StyledContainer>

      </WindowFrame> : null;

  return displayContent;
}

const mapStateToProps = (state) => {
  return {
    about: state.about
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAboutBlur: () => dispatch(blurAbout()),
    onAboutFocus: () => dispatch(focusAbout()),
    onAboutMinimize: () => dispatch(minimizeAbout()),
    onAboutExit: () => dispatch(exitAbout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);