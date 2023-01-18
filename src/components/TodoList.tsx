import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TodoListProps, TodoType } from 'shared/interfaces';
import { RootState } from 'config/configStore';

const TodoList: React.FC<TodoListProps> = ({ isActive }) => {
  const todos = useSelector((state: RootState) => state.todos);
  console.log('todos', todos);

  return (
    <Body>
      <Title>{isActive ? 'Working..🔥' : 'Done..!🎉'}</Title>
      <TodoListWrapper>
        {todos
          .filter((todo) => !todo.isDone === isActive)
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
      </TodoListWrapper>
    </Body>
  );
};

const TodoListWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 18px;
`;

const Title = styled.div`
  font-size: 30px;
  color: #ececec;
  margin: 20px 0px;
`;

const Body = styled.div`
  padding: 0px 20px 26px;
  width: 100%;
`;

export default TodoList;
