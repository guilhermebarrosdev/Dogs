import { createSlice } from '@reduxjs/toolkit';

/**
 * Cria uma slice com função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Object} config.fetchConfig
 */

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      lastUpdate: 0,
      cache: 0,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      updateTime(state, action) {
        state.lastUpdate = action.payload;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError, updateTime } = slice.actions;

  const asyncAction = (payload) => async (dispatch, getState) => {
    const { lastUpdate, cache } = getState()[slice.name];
    if (lastUpdate > Date.now() - cache) return;
    console.log(lastUpdate > Date.now() - cache);
    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok === false) throw new Error(data.message);
      dispatch(updateTime(Date.now()));
      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  return { ...slice, asyncAction };
};

export default createAsyncSlice;
