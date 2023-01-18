// 투두리스트에 필요한 모든 state 들이 모여있는 todo.js 모듈입니다.
import { v4 as uuidv4 } from "uuid";

// 액션밸류 - Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_BUTTON = "SWITCH_BUTTON";

// 액션 크리에이터 - Action Creator
export const addTodo = (title, contents) => {
  return {
    type: ADD_TODO,
    payload: { title, contents },
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchButton = (id, isDone) => {
  return {
    type: SWITCH_BUTTON,
    payload: { id, isDone },
  };
};

// 초기 상태값 - initial State
const initialState = {
  todos: [
    {
      title: "Redux",
      contents: "투두리스트 리팩토링",
      isDone: false,
      id: uuidv4(),
    },
    { title: "Work out", contents: "헬스장 가기", isDone: false, id: uuidv4() },
    {
      title: "React",
      contents: "투두리스트 완성하기",
      isDone: true,
      id: uuidv4(),
    },
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodoList = {
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
        id: uuidv4(),
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
