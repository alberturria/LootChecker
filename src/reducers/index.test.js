import rootReducer from './index';

describe('rootReducer', () => {
    it('initializes the default state', () => {
        const expectedDefaultState = { balance: 0, bitcoin: {} };
        expect(rootReducer({}, {})).toEqual(expectedDefaultState);
    });
})