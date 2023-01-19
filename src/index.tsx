import React from 'react';
import ReactDOM from 'react-dom/client';
// client 안 붙여줬었음.
import App from './App';
// 우리가 추가할 코드 (Redux)
import store from './config/configStore';
import { Provider } from 'react-redux';

// as HTML.. 지정해줘야 함.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// const root = ReactDOM.render(
//   //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
