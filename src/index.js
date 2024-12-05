import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import store from './store/index'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <Toaster toastOptions={{
      position: 'top-right',
      style: {
        background: 'white',
        color: 'black'
      }
    }} />
  </Provider>
);

reportWebVitals();
