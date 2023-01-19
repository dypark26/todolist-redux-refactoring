import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from 'modules/todos';
import styled from 'styled-components';

const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  // onSubmit event: React에서 이벤트 태그랑 return 값에서 해당하는 요소를 찾아서 넣어주기
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (title === '') {
      alert('제목을 입력하세요!');
      return;
    } else if (contents === '') {
      alert('내용을 입력하세요!');
      return;
    }
    dispatch(todosActions.addTodo({ title, contents }));
    setTitle('');
    setContents('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <InputWrapper>
        <label>제목</label>
        <InputButton
          value={title}
          onChange={handleChangeTitle}
          type="text"
          placeholder="어떤것을 해볼까요?"
        />
        <label>내용</label>
        <InputButton
          value={contents}
          onChange={handleChangeContents}
          type="text"
          placeholder="설명을 적어주세요!!"
        />
        <SubmitButton backgroundColor="#21aeff">추가</SubmitButton>
      </InputWrapper>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: black;
  color: #ececec;
`;

const InputButton = styled.input`
  border: none;
  background-color: #393939;
  color: #ececec;
  border-radius: 10px;
  padding: 6px 10px 6px;
  width: 200px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
`;

const SubmitButton = styled.button<{ backgroundColor: string }>`
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  border: none;
  height: 40px;
  width: 100px;
  cursor: pointer;
`;

export default Input;
