// src/App.tsx
// Router.tsx, App.tsx 는 tsx로 끝나지 않으면 오류남 (.ts (X))

import React from 'react';
import Router from './shared/Router';

const App: React.FC = () => {
  return <Router />;
};

export default App;
