import mockedBE from '../mockedBE';

const fetch = (url, options) => mockedBE(url, options.method)

export default fetch;
