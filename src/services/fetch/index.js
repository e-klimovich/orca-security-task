import mockedBE from '../mockedBE';

const fetch = (url, options) => mockedBE(url, options.method, options.body)

export default fetch;
