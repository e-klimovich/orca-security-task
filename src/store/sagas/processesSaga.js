import { takeEvery, call, put } from 'redux-saga/effects';

import processesSlice from '../slices/processesSlice';

import { getProcessesRequest } from '../../services/api/v1/processes';

export function* fetchProcesses() {
  try {
    yield call(getProcessesRequest)
    yield put(processesSlice.actions.fetchSuccess());
  } catch (error) {
    yield put(processesSlice.actions.fetchFailure());
  }
}

export default function* processesSaga() {
  yield takeEvery(processesSlice.actions.fetch.type, fetchProcesses);
}