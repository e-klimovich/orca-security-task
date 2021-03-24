import { MOCKED_API_PATHS, STORAGE_KEY } from '../constants';

import { genRandomProcess } from './utils';

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  });
};

const getItems = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const setItems = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

const mockedBE = async (url, method, body) => {
  await delay();

  switch(true) {
    case MOCKED_API_PATHS.processes === url && method === 'GET':
      return getItems();

    case MOCKED_API_PATHS.processes === url && method === 'POST':
      const withAddedItem = [...getItems(), genRandomProcess()];

      setItems(withAddedItem);

      return withAddedItem;

    case MOCKED_API_PATHS.processes === url && method === 'DELETE':
      const withRemovedItem = getItems().filter((item) => item.id !== body.id);

      setItems(withRemovedItem);

      return withRemovedItem;

    default: throw new Error();
  }
};

export default mockedBE;
