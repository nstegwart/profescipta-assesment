import { combineReducers } from 'redux';
import defaultState from './states/default-state'

const rootReducer = combineReducers({
  defaultState,
});

export default rootReducer;