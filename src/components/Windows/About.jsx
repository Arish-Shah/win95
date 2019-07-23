import React from 'react';
import { connect } from 'react-redux';

function About({ about }) {
  const displayContent =
    about.show && !about.minimized ?
      "This is about" : null;

  return displayContent;
}

const mapStateToProps = (state) => {
  return {
    about: state.about
  }
}

export default connect(mapStateToProps)(About);