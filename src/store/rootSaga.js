import { fork } from 'redux-saga/effects';

import processesSaga from './sagas/processesSaga';

function* rootSaga() {
  yield fork(processesSaga);
}

export default rootSaga;
