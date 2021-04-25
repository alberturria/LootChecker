import { FETCH_BITCOIN } from './constants';

const RESOURCE_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const fetchBitcoin = () => {
    return dispatch => {
        return fetch(RESOURCE_URL)
        .then(response => response.json())
        .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json}))
    }
}