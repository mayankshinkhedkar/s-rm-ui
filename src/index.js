import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import { Provider } from 'react-redux'
import appStore from './redux/store/appStore'

const store = appStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

serviceWorker.unregister();
