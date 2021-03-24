import React from 'react';
import { useParams } from 'react-router-dom';

import JobsList from '../modules/JobsList';

const JobsPage = () => {
  const { id } = useParams();

  return <JobsList processId={id} />
};

export default JobsPage;
