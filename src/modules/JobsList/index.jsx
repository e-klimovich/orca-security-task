import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { statusedProcessesSelector } from '../../store/selectors/processes';

import { JobCard, Title, Button, Input } from '../../components';

import { InputWrapperStyled } from './styles';

const ProcessesList = (props) => {
  const { processId } = props;

  const history = useHistory();

  const [searchValue, setSearchValue] = useState('');

  const processes = useSelector(statusedProcessesSelector);

  const handleBackClick = () => {
    history.goBack();
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const jobs = useMemo(() => {
    const jobs = processes.find((item) => item.id === processId)?.jobs || [];

    return jobs.filter((item) => item.name.includes(searchValue))
  }, [processes, processId, searchValue]);

  return (
    <div>
      <div>
        <Button onClick={handleBackClick}>Back</Button>
      </div>

      <Title>Jobs</Title>

      <InputWrapperStyled>
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search by Name"
        />
      </InputWrapperStyled>

      <div>
        {jobs.map((item) => (
          <JobCard
            key={item.id}
            name={item.name}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}

export default ProcessesList;
