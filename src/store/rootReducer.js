import { combineReducers } from 'redux';

import processesSlice from './slices/processesSlice';

const rootReducer = combineReducers({
  processes: processesSlice.reducer,
});

export default rootReducer;
