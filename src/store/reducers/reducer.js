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
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        showStart: !state.showStart
      }
    default: return state;
  }
}

export default reducer;