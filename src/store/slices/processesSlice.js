import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

export const processesSlice = createSlice({
  name: 'processes',
  initialState,
  reducers: {
    // fetching processes
    fetch: (state, action) => ({
      isLoading: true,
      isError: false,
      ...state,
    }),
    fetchSuccess: (state, action) => ({
      isLoading: false,
      items: action.payload
    }),
    fetchFailure: (state, action) => ({
      isLoading: false,
      isError: true,
      ...state,
    }),

    // add new random process
    add: (state, action) => ({
      isLoading: true,
      isError: false,
      ...state,
    }),
    addSuccess: (state, action) => ({
      isLoading: false,
      items: action.payload
    }),
    addFailure: (state, action) => ({
      isLoading: false,
      isError: true,
      ...state,
    }),

    // remove process by id
    remove: (state, action) => ({
      isLoading: true,
      isError: false,
      ...state,
    }),
    removeSuccess: (state, action) => ({
      isLoading: false,
      items: action.payload
    }),
    removeFailure: (state, action) => ({
      isLoading: false,
      isError: true,
      ...state,
    }),
  },
});

export default processesSlice;
