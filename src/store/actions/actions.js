import * as actionTypes from './actionTypes';

export function shutDown() {
  return {
    type: actionTypes.SHUT_DOWN
  }
}

export function startButtonClicked() {
  return {
    type: actionTypes.START_BUTTON_CLICKED
  }
}

export function startMenuBlur() {
  return {
    type: actionTypes.START_MENU_BLUR
  }
}

//Opening Actions
export function openNotepad() {
  return {
    type: actionTypes.OPEN_NOTEPAD
  }
}

export function openAbout() {
  return {
    type: actionTypes.OPEN_ABOUT
  }
}

export function openModal() {
  return {
    type: actionTypes.OPEN_MODAL
  }
}

//Focus Actions
export function focusNotepad() {
  return {
    type: actionTypes.FOCUS_NOTEPAD
  }
}

export function focusAbout() {
  return {
    type: actionTypes.FOCUS_ABOUT
  }
}

//Blurring Actions
export function blurNotepad() {
  return {
    type: actionTypes.BLUR_NOTEPAD
  }
}

export function blurAbout() {
  return {
    type: actionTypes.BLUR_ABOUT
  }
}

//Minimize Actions
export function minimizeNotepad() {
  return {
    type: actionTypes.MINIMIZE_NOTEPAD
  }
}

export function minimizeAbout() {
  return {
    type: actionTypes.MINIMIZE_ABOUT
  }
}

//Maximize Actions
export function maximizeNotepad() {
  return {
    type: actionTypes.MAXIMIZE_NOTEPAD
  }
}

export function maximizeAbout() {
  return {
    type: actionTypes.MAXIMIZE_ABOUT
  }
}

//Exit Actions
export function exitNotepad() {
  return {
    type: actionTypes.EXIT_NOTEPAD
  }
}

export function exitAbout() {
  return {
    type: actionTypes.EXIT_ABOUT
  }
}

export function exitModal() {
  return {
    type: actionTypes.EXIT_MODAL
  }
}