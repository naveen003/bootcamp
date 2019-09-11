import React from 'react';
import Topup from './Topup';
import { mount, shallow } from 'enzyme';

describe('Topup', () => {
  let wrapper;
  it('renders without error', () => {});
  test('topup check', () => {
    wrapper = mount(<Topup />); // mount/render/shallow when applicable
    wrapper.find('input[name="amount"]').simulate('change', {
      target: { name: 'amount', value: '100' },
    });
    expect(wrapper.state('amout')).toEqual('100');
  });
  it('btnaddmoney check with right data', () => {
    wrapper = mount(<Topup />);
    wrapper.find('input[name="amount"]').simulate('change', {
      target: { name: 'amount', value: '100' },
    });
    wrapper.find('button[name="btnaddmoney"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(true);
  });

  it('btnaddmoney check with wrong data', () => {
    wrapper = mount(<Topup />);
    wrapper.find('input[name="amount"]').simulate('change', {
      target: { name: 'amount', value: 'test' },
    });
    wrapper.find('button[name="btnaddmoney"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(false);
});
