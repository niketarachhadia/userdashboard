import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
import { syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, hashHistory,Redirect,IndexRedirect  } from 'react-router';

const history = syncHistoryWithStore(hashHistory, store)

const routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		  </Router>
	</Provider>
);

document.addEventListener('DOMContentLoaded', ()=> {
	ReactDOM.render(routes, document.getElementById('root'));
});
