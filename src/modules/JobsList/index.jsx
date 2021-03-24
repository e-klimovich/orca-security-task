import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { statusedProcessesSelector } from '../../store/selectors/processes';

import { JobCard, Title, Button } from '../../components';

const ProcessesList = (props) => {
  const { processId } = props;

  const history = useHistory();

  const processes = useSelector(statusedProcessesSelector);

  const handleBackClick = () => {
    history.goBack();
  };

  const process = useMemo(() => {
    return processes.find((item) => item.id === processId)
  }, [processes, processId]);

  return (
    <div>
      <div>
        <Button onClick={handleBackClick}>Back</Button>
      </div>

      <Title>Jobs</Title>

      <div>
        {process
          ? process.jobs.map((item) => (
            <JobCard
              key={item.id}
              name={item.name}
              status={item.status}
            />
          ))
          : (
            <div>No Jobs</div>
          )}
      </div>
    </div>
  )
}

export default ProcessesList;
