import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showStart: false,
  showModal: false,
  about: {
    show: false,
    blurred: false,
    minimized: false
  },
  notepad: {
    show: false,
    blurred: false,
    minimized: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_BUTTON_CLICKED:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          ...state.notepad,
          blurred: true
        },
        showStart: !state.showStart
      }

    case actionTypes.START_MENU_BLUR:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        showStart: false
      }

    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          ...state.notepad
        },
        showModal: true
      }

    case actionTypes.OPEN_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          show: true,
          blurred: false,
          minimized: false
        }
      }

    case actionTypes.OPEN_ABOUT:
      return {
        ...state,
        about: {
          show: true,
          blurred: false,
          minimized: false
        },
        notepad: {
          ...state.notepad,
          blurred: true
        }
      }

    default: return state;
  }
}

export default reducer;