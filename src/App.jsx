import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { processesSelector } from './store/selectors/processes';
// import processesSlice from './store/slices/processesSlice';

import ProcessesList from './modules/ProcessesList';

const App = () => {
  // const dispatch = useDispatch();
  // const processes = useSelector(processesSelector);

  // console.log({ processes });

  // const handleButtonClick = () => {
  //   dispatch(processesSlice.actions.fetch());
  // };

  return (
    <div>
      <ProcessesList />
    </div>
  )
}

export default App;
