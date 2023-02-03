import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Layout } from 'components/Layout';

const element = document.getElementById('root');
console.log(element);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Layout />
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
