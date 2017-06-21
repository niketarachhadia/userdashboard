import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware,routerReducer} from 'react-router-redux'
import {hashHistory} from 'react-router'
import {userReducer} from './redux/reducers'
let reducers={userReducer}
const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});
const middleware = applyMiddleware(
  routerMiddleware(hashHistory),
  thunk
);
const store = createStore(rootReducer,middleware);
export default store;