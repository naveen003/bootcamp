import React from 'react';
import { mount, shallow } from 'enzyme';
import Register from './Register';

describe('Test case for testing Register', () => {
  let wrapper;
  it('renders without error', () => {});

  test('firstname check', () => {
    wrapper = mount(<Register />); // mount/render/shallow when applicable
    wrapper.find('input[name="firstname"]').simulate('change', {
      target: { name: 'firstname', value: 'testuser' },
    });
    expect(wrapper.state('firstname')).toEqual('testuser');
  });

  test('lastname check', () => {
    wrapper = mount(<Register />); // mount/render/shallow when applicable
    wrapper.find('input[name="lastname"]').simulate('change', {
      target: { name: 'lastname', value: 'testuser' },
    });
    expect(wrapper.state('lastname')).toEqual('testuser');
  });

  test('dob check', () => {
    wrapper = mount(<Register />); // mount/render/shallow when applicable
    wrapper.find('input[name="dob"]').simulate('change', {
      target: { name: 'dob', value: 'testuser' },
    });
    expect(wrapper.state('dob')).toEqual('testuser');
  });

  test('email check', () => {
    wrapper = mount(<Register />); // mount/render/shallow when applicable
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'testuser' },
    });
    expect(wrapper.state('email')).toEqual('testuser');
  });

  test('mobile check', () => {
    wrapper = mount(<Register />); // mount/render/shallow when applicable
    wrapper.find('input[name="mobile"]').simulate('change', {
      target: { name: 'mobile', value: '1234567890' },
    });
    expect(wrapper.state('mobile')).toEqual('(123)456-7890');
  });

  it('register check with right data', () => {
    wrapper = mount(<Register />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test@test.com' },
    });
    wrapper.find('input[name="firstname"]').simulate('change', {
      target: { name: 'firstname', value: 'test' },
    });
    wrapper.find('input[name="lastname"]').simulate('change', {
      target: { name: 'lastname', value: 'user' },
    });
    wrapper.find('input[name="dob"]').simulate('change', {
      target: { name: 'dob', value: '2000-12-12' },
    });
    wrapper.find('input[name="mobile"]').simulate('change', {
      target: { name: 'mobile', value: '1234567890' },
    });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('validation').isValid).toBe(true);
  });

  it('register check with wrong data', () => {
    wrapper = mount(<Register />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test1@test.com' },
    });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('validation').isValid).toBe(false);
  });
});
