import { createSelector } from 'reselect';

import { JOB_STATUS } from '../../constants';

import processesSlice from '../slices/processesSlice';

export const processesSelector = (state) => state[processesSlice.name];
export const processesItemsSelector = (state) => state[processesSlice.name].items;
export const processesLoadingSelector = (state) => state[processesSlice.name].isLoading;

const calcProcessStatus = (jobs) => {
  if (jobs.find((item) => item.status === JOB_STATUS.failed)) {
    return JOB_STATUS.failed;
  }

  if (jobs.find((item) => item.status === JOB_STATUS.running)) {
    return JOB_STATUS.running;
  }

  return JOB_STATUS.successed;
}

export const statusedProcessesSelector = createSelector(
  processesItemsSelector,
  (processes) => processes.map((item) => ({
    ...item,
    status: calcProcessStatus(item.jobs),
  }))
);
