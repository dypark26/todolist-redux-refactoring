import { v4 as uuidv4 } from 'uuid';
import { TodoType } from 'shared/interfaces';
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
    addTodo(state, action: PayloadAction<TodoType>) {
      // type은 interface에서 만들어둔 TodoType 객체
      const newTodoList = {
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
        id: uuidv4(),
      };
      state = [...state, newTodoList];
    },
    deleteTodo(state, action) {
      state = state.filter((todo) => todo.id !== action.payload);
    },
    switchButton(state, action) {
      state = state.map((todo) => {
        if (todo.id === action.payload) {
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
