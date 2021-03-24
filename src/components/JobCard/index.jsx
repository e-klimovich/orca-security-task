import React from 'react';

import Card from '../Card';

const JobCard = (props) => {
  const { name, status } = props;

  return (
    <Card>
      <div>Name: {name}</div>
      <div>Status: {status}</div>
    </Card>
  )
}

export default JobCard;
