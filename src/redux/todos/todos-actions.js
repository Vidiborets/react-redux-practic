import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import { ADD, CHANGE_FILTER, DELETE } from './todos-types';
export const addTodo = createAction('todos/add', text => {
  return {
    payload: { text, completed: false, id: shortid.generate() },
  };
});
// export const addTodo = text => ({
//   type: ADD,
//   payload: {
//     text,
//     completed: false,
//     id: shortid.generate(),
//   },
// });

export const deleteTodo = createAction('todos/delete');
// export const deleteTodo = todoId => ({
//   type: DELETE,
//   payload: todoId,
// });
export const changeFilter = createAction('todos/changeFilter');
// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
export const toogleCompleted = createAction('todos/toggleCompleted');
