import React from 'react';
import styled from 'styled-components';
import { HeaderProps } from 'shared/interfaces';

// 해당 React.FC functional component가 어떤 interface값을 참조할지를 <>안에 써주기
const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <TopHeader>
      <p>{children}</p>
      <p>Redux</p>
    </TopHeader>
  );
};

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  font-size: 20px;
  color: #ececec;
`;

export default Header;
