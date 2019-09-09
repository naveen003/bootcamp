import React from 'react';
import { mount, shallow } from 'enzyme';
import SetLoginPin from './SetLoginPin';

describe('SetLoginPin', () => {
  let wrapper;
  it('renders without error', () => {});
  test('setloginpin check', () => {
    wrapper = mount(<SetLoginPin />); // mount/render/shallow when applicable
    wrapper.find('input[name="pin"]').simulate('change', {
      target: { name: 'pin', value: '1234' },
    });
    expect(wrapper.state('pin')).toEqual('1234');
    wrapper.find('input[name="confirmpin"]').simulate('change', {
      target: { name: 'confirmpin', value: '1234' },
    });
    expect(wrapper.state('confirmpin')).toEqual('1234');
  });
  it('loginpin check with right data', () => {
    wrapper = mount(<SetLoginPin />);
    wrapper.find('input[name="pin"]').simulate('change', {
      target: { name: 'pin', value: '12345' },
    });
    wrapper.find('input[name="confirmpin"]').simulate('change', {
      target: { name: 'confirmpin', value: '12345' },
    });
    wrapper.find('button[name="verifypin"]').simulate('click');
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
    wrapper.find('button[name="verifypin"]').simulate('click');
    expect(wrapper.state('validation').isValid).toBe(false);
  });
});
