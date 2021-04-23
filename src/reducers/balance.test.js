import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('Balance Reducers', () => {
    it('sets a balance', () => {
        const balance = 10;
        const action = { type: constants.SET_BALANCE, balance };
        
        expect(balanceReducer(undefined, action)).toEqual(balance); 
    })

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        const action = { type: constants.DEPOSIT, deposit}

        expect(balanceReducer(initialState, action)).toEqual(initialState + deposit);
    });

    it('withdraw from the balance', () => {
        const withdraw = 10;
        const initialState = 5;
        const action = { type: constants.WITHDRAW, withdraw };

        expect(balanceReducer(initialState, action)).toEqual(initialState - withdraw);
    })
});