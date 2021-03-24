import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { statusedProcessesSelector } from '../store/selectors/processes';
import processesSlice from '../store/slices/processesSlice';

import { ProcessCard, Button, Title, Select } from '../components';

import { filterOptions, FILTER_TYPE } from './constants';
import { sortByName, sortByDate } from './utils';

import { FilterWrapperStyled } from './styles';

const ProcessesList = () => {
  const dispatch = useDispatch();
  const processes = useSelector(statusedProcessesSelector);

  const [filterValue, setFilterValue] = useState(FILTER_TYPE.name);

  useEffect(() => {
    dispatch(processesSlice.actions.fetch());
  }, []);

  const handleAddProcessClick = () => {
    dispatch(processesSlice.actions.add());
  };

  const handleShowJobsClick = () => {
    alert('show job');
  };

  const handleProcessRemove = (id) => {
    dispatch(processesSlice.actions.remove(id));
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredProcesses = useMemo(
    () => {
      return processes.sort((a, b) => {
        switch (true) {
          default:
          case filterValue === FILTER_TYPE.name:
            return sortByName(a.name, b.name);
  
          case filterValue === FILTER_TYPE.jobsCount:
            return a.jobsCount - b.jobsCount;
  
          case filterValue === FILTER_TYPE.time:
            return sortByDate(a.startTime, b.startTime);
        }
      })
    },
    [processes, filterValue],
  );

  return (
    <div>
      <Title>Processes</Title>

      <FilterWrapperStyled>
        <span>Filter by:</span>
        <Select
          options={filterOptions}
          value={filterValue}
          onChange={handleFilterChange}
        />
      </FilterWrapperStyled>

      <div>
        {filteredProcesses.map((item) => (
          <ProcessCard
            key={item.id}
            id={item.id}
            name={item.name}
            startTime={item.startTime}
            jobsCount={item.jobsCount}
            status={item.status}
            onShowJobsClick={handleShowJobsClick}
            onRemoveClick={handleProcessRemove}
          />
        ))}
      </div>
      <Button onClick={handleAddProcessClick}>Add Random Process</Button>
    </div>
  )
}

export default ProcessesList;
