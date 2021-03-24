import { fork } from 'redux-saga/effects';

import {
  fetchProcessesWatcher,
  addProcessWatcher,
  removeProcessWatcher,
} from './sagas/processesSaga';

function* rootSaga() {
  yield fork(fetchProcessesWatcher);
  yield fork(addProcessWatcher);
  yield fork(removeProcessWatcher);
}

export default rootSaga;
