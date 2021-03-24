import { createSelector } from 'reselect';

import { JOB_STATUS } from '../../constants';

import processesSlice from '../slices/processesSlice';

export const processesSelector = (state) => state[processesSlice.name].items;

export const calcProcessStatus = (jobs) => {
  jobs.find((item) => item.status === JOB_STATUS.failed);

  if (jobs.find((item) => item.status === JOB_STATUS.failed)) {
    return JOB_STATUS.failed;
  }

  if (jobs.find((item) => item.status === JOB_STATUS.running)) {
    return JOB_STATUS.running;
  }

  return JOB_STATUS.processes;
}

export const statusedProcessesSelector = createSelector(
  processesSelector,
  (processes) => processes.map((item) => ({
    ...item,
    status: calcProcessStatus(item.jobs),
  }))
);
