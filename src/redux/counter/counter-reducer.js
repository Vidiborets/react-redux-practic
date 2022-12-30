import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-types';
const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;

    default:
      return state;
  }
};
const stepReducer = (state = 2, { type, payload }) => state;
export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
