import { MOCKED_API_PATHS, STORAGE_KEY } from '../constants';

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  });
}

const getItems = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const mockedBE = async (url, method, body) => {
  await delay();

  switch(true) {
    case MOCKED_API_PATHS.processes === url && method === 'GET':
      return getItems();

    case MOCKED_API_PATHS.processes === url && method === 'POST':
      return [...getItems(), { id: 0 }];

    case MOCKED_API_PATHS.processes === url && method === 'DELETE':
      return getItems().filter((item) => item.id === body.id)

    default: throw new Error();
  }
};

export default mockedBE;
