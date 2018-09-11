import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { reducers } from './reducers'

const store = createStore(reducers, applyMiddleware(createLogger, thunkMiddleware));

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
