import React from 'react';
import VerifyPin from './VerifyPin';

describe('Test case for testing Verfiypin', () => {
  let wrapper;
  it('renders without error', () => {});
  test('verifypin check', () => {
    wrapper = mount(<Register />); // mount/render/shallow when applicable
    wrapper.find('input[name="verifypin"]').simulate('change', {
      target: { name: 'verifypin', value: 'testpin' },
    });
    expect(wrapper.state('verifypin')).toEqual('testpin');
  });

  it('verifypin check with right data', () => {
    wrapper = mount(<VerifyPin />);
    wrapper.find('input[name="verifypin"]').simulate('change', {
      target: { name: 'verifypin', value: '12345' },
    });
    wrapper.find('input[name="verify"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(true);
  });

  it('register check with wrong data', () => {
    wrapper = mount(<VerifyPin />);
    wrapper.find('input[name="verifypin"]').simulate('change', {
      target: { name: 'verifypin', value: '' },
    });
    wrapper.find('input[name="verify"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(false);
  });
});
