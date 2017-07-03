import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import HomeContainer from './containers/HomeContainer';
import FavouriteCategoryDisplay from './containers/FavouriteCategoryDisplay';
import ProgramDisplay from './containers/ProgramsDisplay';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path='/category/:category' component={FavouriteCategoryDisplay} />
      <Route path='/program/:program' component={ProgramDisplay} /> 
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.appcontainer'));
