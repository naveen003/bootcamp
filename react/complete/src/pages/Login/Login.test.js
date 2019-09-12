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
    expect(wrapper.find('input[name="email"]').prop('value')).toEqual(
      'test@test.com',
    );
    expect(wrapper.find('input[name="code"]').prop('value')).toEqual('1234');
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('error-email').exists()).toBe(false);
    expect(wrapper.find('error-code').exists()).toBe(false);
  });

  it('login check with invalid data', () => {
    wrapper = mount(<Login />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test@test.com' },
    });
    wrapper.find('input[name="code"]').simulate('change', {
      target: { name: 'code', value: '123456' },
    });
    expect(wrapper.find('input[name="email"]').prop('value')).toEqual(
      'test@test.com',
    );
    expect(wrapper.find('input[name="code"]').prop('value')).toEqual('123456');
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('error-email').exists()).toBe(false);
    expect(wrapper.find('error-code').exists()).toBe(false);
  });
});
