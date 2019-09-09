import React from 'react';
import SetTransactionPin from './SetTransactionPin';

describe('SetTransactionPin', () => {
  let wrapper;
  it('renders without error', () => {});
  test('SetTransactionPin check', () => {
    wrapper = mount(<SetTransactionPin />); // mount/render/shallow when applicable
    wrapper.find('input[name="pin"]').simulate('change', {
      target: { name: 'pin', value: 'pin' },
    });
    expect(wrapper.state('verifypin')).toEqual('pin');
    wrapper.find('input[name="confirmpin"]').simulate('change', {
      target: { name: 'confirmpin', value: 'confirmpin' },
    });
    expect(wrapper.state('confirmpin')).toEqual('confirmpin');
  });
  it('loginpin check with right data', () => {
    wrapper = mount(<SetTransactionPin />);
    wrapper.find('input[name="pin"]').simulate('change', {
      target: { name: 'pin', value: '12345' },
    });
    wrapper.find('input[name="confirmpin"]').simulate('change', {
      target: { name: 'confirmpin', value: '12345' },
    });
    wrapper.find('input[name="verifypin"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(true);
  });

  it('login check with wrong data', () => {
    wrapper = mount(<SetTransactionPin />);
    wrapper.find('input[name="pin"]').simulate('change', {
      target: { name: 'pin', value: '12345' },
    });
    wrapper.find('input[name="confirmpin"]').simulate('change', {
      target: { name: 'confirmpin', value: '123456' },
    });
    wrapper.find('input[name="verifypin"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(false);
  });
});
