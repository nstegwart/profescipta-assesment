import * as types from './types'

const initialState = {
    listOrder: [],
    listItem: [],
    userToken: null
}

const defaultState = (state = initialState, action) => {
    switch (action.type) {
      case types.SET_LIST_ORDER:
        return {
            ...state,
            listOrder: action.payload
        }
      case types.SET_LIST_ITEM:
        return {
            ...state,
            listItem: action.payload
        }
      case types.SET_USER_TOKEN:
        return {
            ...state,
            userToken: action.payload
        }
      default:
        return state;
    }
  };
  
  export default defaultState;