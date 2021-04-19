import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const props = { balance: 20 };
    const wallet = shallow(<Wallet {...props}/>);
    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        const expectedBalance = 'Wallet balance: 20';
        const balanceNode = wallet.find('.balance');
        expect(balanceNode.text()).toEqual(expectedBalance);
    });
})