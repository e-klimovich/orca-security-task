import {
  processesSelector,
  processesItemsSelector,
  processesLoadingSelector,
  statusedProcessesSelector,
} from '../processes';
import { JOB_STATUS } from '../../../constants';

describe('selectors', () => {
  const state = {
    processes: {
      isLoading: true,
      isError: false,
      items: [{}, {}]
    },
  };

  it('processesSelector', () => {
    expect(processesSelector(state)).toEqual(state.processes);
  });

  it('processesItemsSelector', () => {
    expect(processesItemsSelector(state)).toEqual(state.processes.items);
  });

  it('processesLoadingSelector', () => {
    expect(processesLoadingSelector(state)).toEqual(state.processes.isLoading);
  });

  it('statusedProcessesSelector successed status', () => {
    const precessesWithSuccessedJobs = [
      {
        jobs: [
          {
            status: JOB_STATUS.successed,
          },
          {
            status: JOB_STATUS.successed,
          },
          {
            status: JOB_STATUS.successed,
          },
        ]
      }
    ];

    expect(statusedProcessesSelector({ processes: { items: precessesWithSuccessedJobs } }))
      .toEqual([{
        jobs: precessesWithSuccessedJobs[0].jobs,
        status: JOB_STATUS.successed,
      }]);
  });

  it('statusedProcessesSelector failed status', () => {
    const precessesWithFailedJobs = [
      {
        jobs: [
          {
            status: JOB_STATUS.failed,
          },
          {
            status: JOB_STATUS.running,
          },
          {
            status: JOB_STATUS.successed,
          },
        ]
      }
    ];

    expect(statusedProcessesSelector({ processes: { items: precessesWithFailedJobs } }))
      .toEqual([{
        jobs: precessesWithFailedJobs[0].jobs,
        status: JOB_STATUS.failed,
      }]);
  });

  it('statusedProcessesSelector running status', () => {
    const precessesWithRunningJobs = [
      {
        jobs: [
          {
            status: JOB_STATUS.successed,
          },
          {
            status: JOB_STATUS.running,
          },
          {
            status: JOB_STATUS.successed,
          },
        ]
      }
    ];

    expect(statusedProcessesSelector({ processes: { items: precessesWithRunningJobs } }))
      .toEqual([{
        jobs: precessesWithRunningJobs[0].jobs,
        status: JOB_STATUS.running,
      }]);
  });
})