const { configureStore, combineReducers } = require('@reduxjs/toolkit');

// const middleware = [...getDefaultMiddleware, ]

const contador = () => 0;

const reducer = combineReducers({ contador });

const store = configureStore({ reducer });

export default store;
