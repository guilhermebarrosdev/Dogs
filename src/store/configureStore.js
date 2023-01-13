import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import photo from './photo';
import token from './token';
import feed from './feed';
import user from './user';
import ui from './ui';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, token, user, feed, ui });
const store = configureStore({ reducer, middleware });

export default store;
