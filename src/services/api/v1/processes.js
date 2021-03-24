import fetch from '../../fetch';

import { MOCKED_API_PATHS } from '../../constants';

export const getProcessesRequest = async () => {
  const res = await fetch(MOCKED_API_PATHS.processes, { method: 'GET' });

  return res;
};