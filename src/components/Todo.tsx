import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { todosActions } from 'modules/todos';
import { TodoProps, TodoType } from 'shared/interfaces';

const Todo: React.FC<TodoProps> = ({ todo }: { todo: TodoType }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonOnclick = () => {
    dispatch(todosActions.deleteTodo(todo.id));
  };

  const switchButtonOnClick = () => {
    dispatch(todosActions.switchButton(todo.id));
  };

  return (
    <TodoWrapper>
      <TodoTop>
        <Link to={`/${todo.id}`} key={todo.id}>
          <GoToDetail>상세보기</GoToDetail>
        </Link>
        <TodoContentWrapper>
          <div>{todo.title}</div>
          <p>{todo.contents}</p>
        </TodoContentWrapper>
      </TodoTop>

      <TodoButtonWrapper>
        <CustomButton onClick={switchButtonOnClick}>
          {todo.isDone ? '취소' : '완료'}
        </CustomButton>
        <CustomButton
          onClick={handleDeleteButtonOnclick}
          backgroundColor="rgb(38, 38, 38)"
        >
          삭제
        </CustomButton>
      </TodoButtonWrapper>
    </TodoWrapper>
  );
};

// 같은 styledComponent 를 공유하는데 프롭스가 일치하지 않으면 optional parameter를 사용해준다.
// CustomButton은 backgroundColor라는 props가 있을 때도, 없을 때도 있다.
const CustomButton = styled.button<{ backgroundColor?: string }>`
  color: ${(props) => (props.children === '취소' ? 'rgb(0, 0, 0)' : 'white')};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.children === '취소'
      ? '#ff7b7b'
      : '#21aeff'};
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  height: 40px;
  width: calc(50vh - 4px);
  cursor: pointer;
`;

const TodoWrapper = styled.div`
  width: 250px;
  height: 170px;
  border: none;
  background-color: #efefef;
  border-radius: 10px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 16px;
`;

const TodoTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  a {
    text-decoration: none;
  }
`;

const GoToDetail = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #21aeff;
  cursor: pointer;
`;

const TodoContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    font-size: 26px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
  }
`;

const TodoButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export default Todo;
