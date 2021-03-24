import { takeEvery, call, put } from 'redux-saga/effects';

import processesSlice from '../slices/processesSlice';

import {
  getProcessesRequest,
  addProcessesRequest,
  deleteProcessesRequest,
} from '../../services/api/v1/processes';

export function* fetchProcesses() {
  try {
    const data = yield call(getProcessesRequest);

    yield put(processesSlice.actions.fetchSuccess(data));
  } catch (error) {
    yield put(processesSlice.actions.fetchFailure());
  }
}

export function* addProcess() {
  try {
    const data = yield call(addProcessesRequest);

    yield put(processesSlice.actions.addSuccess(data));
  } catch (error) {
    yield put(processesSlice.actions.addFailure());
  }
}

export function* removeProcess({ payload }) {
  try {
    const data = yield call(deleteProcessesRequest, payload);

    yield put(processesSlice.actions.removeSuccess(data));
  } catch (error) {
    yield put(processesSlice.actions.removeFailure());
  }
}

/**
 * Watchers
 */

export function* fetchProcessesWatcher() {
  yield takeEvery(processesSlice.actions.fetch.type, fetchProcesses);
}

export function* addProcessWatcher() {
  yield takeEvery(processesSlice.actions.add.type, addProcess);
}

export function* removeProcessWatcher() {
  yield takeEvery(processesSlice.actions.remove.type, removeProcess);
}
