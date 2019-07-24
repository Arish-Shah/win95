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
  },
  shutDown: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHUT_DOWN:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        shutDown: true
      }

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

    case actionTypes.FOCUS_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          blurred: false
        }
      }

    case actionTypes.FOCUS_ABOUT: {
      return {
        ...state,
        about: {
          ...state.about,
          blurred: false
        },
        notepad: {
          ...state.notepad
        }
      }
    }

    case actionTypes.BLUR_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          blurred: true,
        }
      }

    case actionTypes.BLUR_ABOUT:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          ...state.notepad
        }
      }

    case actionTypes.MINIMIZE_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          minimized: true
        }
      }

    case actionTypes.MINIMIZE_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about,
          minimized: true
        }
      }

    case actionTypes.MAXIMIZE_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          blurred: false,
          minimized: false
        }
      }

    case actionTypes.MAXIMIZE_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about,
          minimized: false,
          blurred: false
        }
      }

    case actionTypes.EXIT_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          show: false,
          minimized: false,
          blurred: false
        }
      }

    case actionTypes.EXIT_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          show: false,
          blurred: false,
          minimized: false
        }
      }

    case actionTypes.EXIT_MODAL:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        showModal: false
      }

    default: return state;
  }
}

export default reducer;