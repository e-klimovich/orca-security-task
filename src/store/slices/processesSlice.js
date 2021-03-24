import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const processesSlice = createSlice({
  name: 'processes',
  initialState,
  reducers: {
    fetch: (state, action) => state,
    fetchSuccess: (state, action) => action.payload,
    fetchFailure: (state, action) => state,

    add: (state, action) => state,
    addSuccess: (state, action) => action.payload,
    addFailure: (state, action) => state,

    remove: (state, action) => state,
    removeSuccess: (state, action) => action.payload,
    removeFailure: (state, action) => state,
  },
});

export default processesSlice;
