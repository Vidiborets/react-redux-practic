import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};
// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: { todos: persistReducer(todosPersistConfig, todosReducer) },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PURGE, PERSIST],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
const persiststor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persiststor };
