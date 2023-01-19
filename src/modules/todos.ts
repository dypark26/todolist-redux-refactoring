import { v4 as uuidv4 } from 'uuid';
import { AddTodo, DeleteTodo, SwitchTodo, TodoType } from 'shared/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// PayloadAction 따로 import 해서 타입지정해줘야 함.

const initialState: TodoType[] = [
  {
    title: 'Redux',
    contents: '투두리스트 리팩토링',
    isDone: false,
    id: uuidv4(),
  },
  { title: 'Work out', contents: '헬스장 가기', isDone: false, id: uuidv4() },
  {
    title: 'React',
    contents: '투두리스트 완성하기',
    isDone: true,
    id: uuidv4(),
  },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddTodo>) {
      // type은 interface에서 만들어둔 TodoType 객체
      // console.log('addTodo', action.payload);
      const newTodoList = {
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
        id: uuidv4(),
      };
      // console.log('newTodoList', newTodoList);
      // console.log('state-current', current(state));
      // console.log('state', state);
      return (state = [...state, newTodoList]);
      // state.push(newTodoList);
    },
    deleteTodo(state, action: PayloadAction<DeleteTodo>) {
      console.log('deleteTodo', action.payload);
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    switchButton(state, action: PayloadAction<SwitchTodo>) {
      // console.log('switchButton', action.payload);
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log('action.payload', action.payload);
          // payload 안에 isDone 값이 없어서 falsy한 값이 되어 항상 true만 리턴하는 애가 돼버림. > payload안에 isDone 넣어줘서 해결.
          return { ...todo, isDone: !action.payload.isDone };
        } else {
          return todo;
        }
      });
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
