import React from 'react';
import SetLoginPin from './SetLoginPin';

describe('SetLoginPin', () => {
  let wrapper;
  it('renders without error', () => {});
  test('setloginpin check', () => {
    wrapper = mount(<SetLoginPin />); // mount/render/shallow when applicable
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
    wrapper = mount(<SetLoginPin />);
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
    wrapper = mount(<SetLoginPin />);
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
