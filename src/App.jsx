import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { processesLoadingSelector } from './store/selectors/processes';
import processesSlice from './store/slices/processesSlice';

import RootRouter from './router';

import { POLLING_INTERVALS } from './constants';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(processesLoadingSelector);

  useEffect(() => {
    dispatch(processesSlice.actions.fetch());

    const intervalId = setInterval(() => {
      dispatch(processesSlice.actions.fetch());
    }, POLLING_INTERVALS)

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  return (
    <div>
      {isLoading && <div>Updating...</div>}
      <RootRouter />
    </div>
  )
}

export default App;
