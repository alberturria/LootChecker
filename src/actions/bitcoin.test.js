// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const RESOURCE_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index'}};

fetchMock.get(RESOURCE_URL, mockResponse)


it('creates an async action to fetch the bitcoin value', () => {
    const expectedAction = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
    })
})