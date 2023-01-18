import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailPage() {
  const todos = useSelector((state) => state.todos.todos);

  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((todo) => todo.id === id);

  return (
    <BackGround>
      <Reset />
      <TodoDetailWrapper>
        <DetailHeader>
          <p>{todo.id}</p>
          <BackButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </BackButton>
        </DetailHeader>
        <TodoContentWrapper>
          <div>{todo.title}</div>
          <p>{todo.contents}</p>
        </TodoContentWrapper>
      </TodoDetailWrapper>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-color: rgb(36, 36, 36);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  height: 100vh;
  min-width: 800px;
  max-width: 1200px;
`;

const TodoDetailWrapper = styled.div`
  width: 50%;
  height: 50%;
  border: none;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 26px;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  p {
    font-size: 16px;
    font-weight: 700;
    color: rgb(33, 174, 255);
  }
`;

const BackButton = styled.button`
  color: black;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  width: fit-content;
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
`;

export default DetailPage;
