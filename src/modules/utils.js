export const sortByName = (a, b) => {
  return a >= b ? 1 : -1;
};

export const sortByDate = (a, b) => {
  return new Date(a).getTime() - new Date(b).getTime();
};
