import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showStart: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_BUTTON_CLICKED:
      return {
        ...state,
        showStart: !state.showStart
      }
    case 'DOC_CLICKED':
      return {
        ...state,
        showStart: false
      }

    default: return state;
  }
}

export default reducer;