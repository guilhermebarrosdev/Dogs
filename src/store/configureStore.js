import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import photo from './photo';
import token from './token';
import feed from './feed';
import user from './user';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, token, user, feed });
const store = configureStore({ reducer, middleware });

export default store;
