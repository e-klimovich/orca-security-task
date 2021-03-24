import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { processesSelector } from './store/selectors/processes';
import processesSlice from './store/slices/processesSlice';

import { Button } from './components';

const App = () => {
  const dispatch = useDispatch();
  const processes = useSelector(processesSelector);

  console.log({ processes });

  const handleButtonClick = () => {
    dispatch(processesSlice.actions.fetch());
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Button</Button>
    </div>
  )
}

export default App;
