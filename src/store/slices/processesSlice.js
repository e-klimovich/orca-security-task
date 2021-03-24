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
      ...state,
      isLoading: true,
      isError: false,
    }),
    fetchSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      items: action.payload,
    }),
    fetchFailure: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),

    // add new random process
    add: (state, action) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    addSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      items: action.payload,
    }),
    addFailure: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),

    // remove process by id
    remove: (state, action) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    removeSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      items: action.payload,
    }),
    removeFailure: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
  },
});

export default processesSlice;
