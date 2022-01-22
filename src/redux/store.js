import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { driverManagement } from './reducer';

const reducers = combineReducers({
  driverManagement,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
