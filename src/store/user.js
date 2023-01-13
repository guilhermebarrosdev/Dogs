import { USER_GET } from '../api';
import createAsyncSlice from './helper/createAsyncSlice';
import { fetchToken, resetTokenState } from './token';

const slice = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = slice.asyncAction;
const { resetState: resetUserState } = slice.actions;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload.token) {
    window.localStorage.setItem('token', payload.token);
    await dispatch(fetchUser(payload.token));
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem('token');
};

export default slice.reducer;
