import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let wrapper;
  it('renders without error', () => {});
  it('login check with right data', () => {
    wrapper = mount(<Login />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test@test.com' },
    });
    wrapper.find('input[name="code"]').simulate('change', {
      target: { name: 'code', value: '1234' },
    });
    expect(wrapper.state('email')).toEqual('test@test.com');
    expect(wrapper.state('code')).toEqual('1234');
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('validation').isValid).toBe(true);
  });

  it('login check with invalid data', () => {
    wrapper = mount(<Login />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test@test.com' },
    });
    wrapper.find('input[name="code"]').simulate('change', {
      target: { name: 'code', value: '123456' },
    });
    expect(wrapper.state('email')).toEqual('test@test.com');
    expect(wrapper.state('code')).toEqual('123456');
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('validation').isValid).toBe(false);
  });
});
