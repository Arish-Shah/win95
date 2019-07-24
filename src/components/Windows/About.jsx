import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import WindowFrame from './WindowFrame/WindowFrame';
import { focusAbout, blurAbout, minimizeAbout, exitAbout } from '../../store/actions/actions';
import aboutImage from '../../assets/taskbar-icons/about.png';

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
        width="600"
        img={aboutImage}
        title="About this Project"
        blurred={about.blurred}
        showMenu={false}
        onMinimize={onAboutMinimize}
        onExit={onAboutExit}
        isMinimized={about.minimized}>
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