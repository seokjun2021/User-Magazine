import React from 'react';
import ReactDOM from 'react-dom';
import './shared/index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"

import store from  './redux/configureStore'

ReactDOM.render(
  <Provider store={store}>
    {/* store 주입 */}
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
