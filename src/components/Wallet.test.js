import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
    const wallet = shallow(<Wallet {...props}/>);
    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        const expectedBalance = 'Wallet balance: 20';
        const balanceNode = wallet.find('.balance');
        expect(balanceNode.text()).toEqual(expectedBalance);
    });

    it('creates an input to deposit into or withdraw from the balance', () => {
        const inputNode = wallet.find('.input-wallet');
        expect(inputNode.exists()).toBe(true);
    })

    describe('When the user types into the wallet input', () => {
        const userBalance = '25';
        
        beforeEach(() => {
            const inputNode = wallet.find('.input-wallet');
            inputNode.simulate('change', { target: { value: userBalance }});
        });

        it('updates the local wallet balance in `state` and converts it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        })

        describe('and the user wants to make a deposit', () => {
            beforeEach(() => {
                const depositButton = wallet.find('.btn-deposit')
                depositButton.simulate('click');
            })
            
            it('dispatches the `deposit()` it receives from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        })

        describe('and the user wants to make a withdrawl', () => {
            beforeEach(() => {
                const withdrawButton = wallet.find('.btn-withdraw')
                withdrawButton.simulate('click');
            })

            it('dispatches the `withdraw()` method it receives from props with the local balance', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        })
    });
})