// import { configureStore } from '@reduxjs/toolkit';
// import todos from '../modules/todos';

// const store = configureStore({
//   reducer: {
//     todos: todos,
//   },
// });

// export default store;

// // reducer의 타입을 지정해주어야 함.
// export type RootState = ReturnType<typeof configureStore>;

import { combineReducers } from 'redux';
import todos from '../modules/todos';

const store = combineReducers({
  todos,
});

export default store;

// reducer의 타입을 지정해주어야 함.
export type RootState = ReturnType<typeof store>;
