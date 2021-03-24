import React from 'react';

import Card from '../Card';

const JobCard = (props) => {
  const { name, status } = props;

  return (
    <Card>
      <div>{name}</div>
      <div>{status}</div>
    </Card>
  )
}

export default JobCard;
