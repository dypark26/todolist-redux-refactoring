import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todos';

const store = configureStore({
  reducer: {
    todos: todos,
  },
});

export default store;

// reducer의 타입을 지정해주어야 함.
// export type RootState = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof store.getState>;

// import { combineReducers, createStore } from 'redux';
// import todos from '../modules/todos';

// const rootReducer = combineReducers({
//   todos,
// });

// // redux 사용법이 잘못됐었음.
// const store = createStore(rootReducer);

// export default store;

// // reducer의 타입을 지정해주어야 함.
// export type RootState = ReturnType<typeof rootReducer>;
