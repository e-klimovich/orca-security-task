import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import {
  fetchProcesses,
  addProcess,
  removeProcess,
  fetchProcessesWatcher,
  addProcessWatcher,
  removeProcessWatcher,
} from '../processesSaga';
import processesSlice from '../../slices/processesSlice';
import * as api from '../../../services/api/v1/processes';

describe('fetchProcessesWatcher', () => {
  const generator = fetchProcessesWatcher();
  
  it('should wait for processes/fetch action and call fetchProcesses', () => {
    expect(generator.next().value)
      .toEqual(takeEvery('processes/fetch', fetchProcesses));
  });
  
  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('fetchProcesses', () => {
  it('should call api and dispatch success action', async () => {
    const data = [{}, {}];
    const spy = jest.spyOn(api, 'getProcessesRequest')
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchProcesses);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([processesSlice.actions.fetchSuccess(data)]);
    spy.mockClear();
  });

  it('should call api and dispatch failure action', async () => {
    const spy = jest.spyOn(api, 'getProcessesRequest')
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, fetchProcesses);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([processesSlice.actions.fetchFailure()]);
    spy.mockClear();
  });
});

describe('addProcessWatcher', () => {
  const generator = addProcessWatcher();
  
  it('should wait for processes/add action and call addProcess', () => {
    expect(generator.next().value)
      .toEqual(takeEvery('processes/add', addProcess));
  });
  
  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('addProcess', () => {
  it('should call api and dispatch success action', async () => {
    const data = {};
    const spy = jest.spyOn(api, 'addProcessesRequest')
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, addProcess);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([processesSlice.actions.addSuccess(data)]);
    spy.mockClear();
  });

  it('should call api and dispatch failure action', async () => {
    const spy = jest.spyOn(api, 'addProcessesRequest')
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, addProcess);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([processesSlice.actions.addFailure()]);
    spy.mockClear();
  });
});

describe('removeProcessWatcher', () => {
  const generator = removeProcessWatcher();
  
  it('should wait for processes/remove action and call removeProcess', () => {
    expect(generator.next().value)
      .toEqual(takeEvery('processes/remove', removeProcess));
  });
  
  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('removeProcess', () => {
  it('should call api and dispatch success action', async () => {
    const data = [{}, {}];
    const spy = jest.spyOn(api, 'deleteProcessesRequest')
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, () => removeProcess({ paylaod: '123' }));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([processesSlice.actions.removeSuccess(data)]);
    spy.mockClear();
  });

  it('should call api and dispatch failure action', async () => {
    const spy = jest.spyOn(api, 'deleteProcessesRequest')
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, () => removeProcess({ paylaod: '123' }));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([processesSlice.actions.removeFailure()]);
    spy.mockClear();
  });
});