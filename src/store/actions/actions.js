import * as actionTypes from './actionTypes';

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