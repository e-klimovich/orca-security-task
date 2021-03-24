import fetch from '../../fetch';

import { MOCKED_API_PATHS } from '../../constants';

export const getProcessesRequest = async () => {
  const res = await fetch(MOCKED_API_PATHS.processes, { method: 'GET' });

  return res;
};

export const addProcessesRequest = async () => {
  const res = await fetch(MOCKED_API_PATHS.processes, { method: 'POST' });

  return res;
};

export const deleteProcessesRequest = async (id) => {
  const res = await fetch(MOCKED_API_PATHS.processes, { method: 'DELETE', body: { id } });

  return res;
};
