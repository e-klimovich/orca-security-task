import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const processesSlice = createSlice({
  name: 'processes',
  initialState,
  reducers: {
    fetch: (state, action) => state,
    fetchSuccess: (state, action) => state,
    fetchFailure: (state, action) => state,
  },
});

export default processesSlice;
