import React from 'react';

import Button from '../Button';
import Card from '../Card';

const ProcessCard = (props) => {
  const {
    id,
    name,
    startTime,
    jobsCount,
    status,
    onShowJobsClick,
    onRemoveClick,
  } = props;

  const handleRemoveClick = () => {
    onRemoveClick(id);
  }

  return (
    <Card>
      <div>Name: {name}</div>
      <div>Date: {new Date(startTime).toDateString()}</div>
      <div>Jobs Count: {jobsCount}</div>
      <div>Status: {status}</div>
      <Button onClick={onShowJobsClick}>Show Jobs</Button>
      <Button onClick={handleRemoveClick}>Remove Process</Button>
    </Card>
  )
}

export default ProcessCard;
