import processesSlice from '../processesSlice';

describe('reducers', () => {
  it('fetch', () => {
    let state = { isLoading: false, isError: true, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/fetch' })
    expect(state).toEqual({ isLoading: true, isError: false, items: [] });
  });

  it('fetchSuccess', () => {
    const payload = [{}, {}];
    let state = { isLoading: true, isError: false, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/fetchSuccess', payload })
    expect(state).toEqual({ isLoading: false, isError: false, items: payload });
  });

  it('fetchFailure', () => {
    let state = { isLoading: true, isError: false, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/fetchFailure' })
    expect(state).toEqual({ isLoading: false, isError: true, items: [] });
  });

  it('add', () => {
    let state = { isLoading: false, isError: true, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/add' })
    expect(state).toEqual({ isLoading: true, isError: false, items: [] });
  });

  it('addSuccess', () => {
    const payload = [{}, {}];
    let state = { isLoading: true, isError: false, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/addSuccess', payload })
    expect(state).toEqual({ isLoading: false, isError: false, items: payload });
  });

  it('addFailure', () => {
    let state = { isLoading: true, isError: false, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/addFailure' })
    expect(state).toEqual({ isLoading: false, isError: true, items: [] });
  });

  it('remove', () => {
    let state = { isLoading: false, isError: true, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/remove' })
    expect(state).toEqual({ isLoading: true, isError: false, items: [] });
  });

  it('removeSuccess', () => {
    const payload = [{}, {}];
    let state = { isLoading: true, isError: false, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/removeSuccess', payload })
    expect(state).toEqual({ isLoading: false, isError: false, items: payload });
  });

  it('removeFailure', () => {
    let state = { isLoading: true, isError: false, items: [] }
    state = processesSlice.reducer(state, { type: 'processes/removeFailure' })
    expect(state).toEqual({ isLoading: false, isError: true, items: [] });
  });
});