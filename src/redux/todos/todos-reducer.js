import { combineReducers } from 'redux';
// import { ADD, CHANGE_FILTER, DELETE } from './todos-types';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodo,
  deleteTodo,
  changeFilter,
  toogleCompleted,
} from './todos-actions';
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
// const items = createReducer([], builder => {
//   builder.addCase(ADD, (state, { type, payload }) => {
//     const todo = payload;
//     return [...state, todo];
//   });
// });
// const items = createReducer([], {
//   [addTodo.type]: (state, { payload }) => [...state, payload],
//   [deleteTodo.type]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [toogleCompleted.type]: (state, { payload }) =>
//     state.map(todo =>
//       todo.id === payload ? { ...todo, completed: !todo.completed } : todo
//     ),
// });
const items = createReducer([], builder => {
  builder
    .addCase(addTodo, (state, { payload }) => [...state, payload])
    .addCase(deleteTodo, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    )
    .addCase(toogleCompleted, (state, { payload }) =>
      state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      )
    );
});
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
// const filter = createReducer('', {
//   [changeFilter.type]: (_, { payload }) => payload,
// });
const filter = createReducer('', builder => {
  builder.addCase(changeFilter, (_, { payload }) => payload);
});

export const todosReducer = combineReducers({
  items,
  filter,
});
