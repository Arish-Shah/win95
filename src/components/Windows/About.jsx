import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import WindowFrame from './WindowFrame/WindowFrame';
import { focusAbout, blurAbout, minimizeAbout } from '../../store/actions/actions';
import aboutImage from '../../assets/taskbar-icons/about.png';

function About({ about, onAboutFocus, onAboutBlur, onAboutMinimize }) {
  useEffect(() => {
    window.addEventListener('click', aboutBlur);
    return () => window.removeEventListener('click', aboutBlur);
  });

  function aboutBlur(event) {
    if (!document.querySelector('#About').contains(event.target)) {
      onAboutBlur();
    } else { onAboutFocus(); }
  }

  const displayContent =
    about.show && !about.minimized ?
      <WindowFrame
        id="About"
        x="100"
        y="50"
        width="400"
        img={aboutImage}
        title="About this Project"
        blurred={about.blurred}
        showMenu={false}>
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
    onAboutMinimize: () => dispatch(minimizeAbout()),
    onAboutFocus: () => dispatch(focusAbout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);