import processesSlice from '../slices/processesSlice';

export const processesSelector = (state) => state[processesSlice.name];
