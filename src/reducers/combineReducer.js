import { combineReducers } from 'redux';

// Reducer pertama
const initialStateCounter = { count: 0 };

const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Reducer kedua
const initialStateUser = { name: '' };

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Menggabungkan semua reducers menjadi satu
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;