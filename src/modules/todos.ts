// 투두리스트에 필요한 모든 state 들이 모여있는 todo.js 모듈입니다.
import { v4 as uuid } from 'uuid';
import { TodoType } from '../shared/interfaces';

// 액션밸류 - Action Value
const ADD_TODO = 'ADD_TODO' as const;
const DELETE_TODO = 'DELETE_TODO' as const;
const SWITCH_BUTTON = 'SWITCH_BUTTON' as const;

// interface TodoAction {
//   type: typeof ADD_TODO;
//   payload: { title: string; contents: string };
// }

// 액션 크리에이터 - Action Creator
export const addTodo = (title: string, contents: string) => {
  return {
    type: ADD_TODO,
    payload: { title, contents },
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchButton = (id: string, isDone: boolean) => {
  return {
    type: SWITCH_BUTTON,
    payload: { id, isDone },
  };
};

// 초기 상태값 - initial State
// 객체 TodoType을 값으로 가지는 배열을 todos 라고 하겠다.
const initialState: { todos: TodoType[] } = {
  todos: [],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodoList = {
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
        id: uuid(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodoList],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos].filter((t) => t.id !== action.payload),
      };
    }
    case SWITCH_BUTTON: {
      return {
        ...state,
        todos: [...state.todos].map((t) => {
          if (t.id === action.payload.id) {
            return { ...t, isDone: !action.payload.isDone };
          } else {
            return t;
          }
        }),
      };
    }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
