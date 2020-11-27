//  libraries
import React from 'react';
import ReactDOM from 'react-dom';

//  redux
import { Provider } from 'react-redux';
import store from 'redux/store';

// testing
import reportWebVitals from './reportWebVitals';

//  App component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
