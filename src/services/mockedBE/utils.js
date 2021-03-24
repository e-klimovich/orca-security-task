import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

const getRandomNumber = (min, max) => {
  const random = Math.random() * (max + 1 - min) + min;

  return Math.floor(random);
}

const genRandomJob = (processId) => {
  return {
    id: uuidv4(),
    processId,
    name: faker.name.title(),
    status: ['running', 'successed', 'failed'][getRandomNumber(0, 2)],
  }
}

export const genRandomProcess = () => {
  const id = uuidv4();
  const jobsCount = getRandomNumber(1, 10);

  return {
    id,
    name: faker.name.jobArea(),
    startTime: faker.date.past(),
    jobsCount,
    jobs: Array.from({ length: jobsCount }).map(() => genRandomJob(id))
  }
}