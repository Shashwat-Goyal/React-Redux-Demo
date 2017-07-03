import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import homeReducer from './homeReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  categories: homeReducer,
  categoryDetails: categoryReducer, 
  routing: routerReducer
  
});

export default rootReducer;
