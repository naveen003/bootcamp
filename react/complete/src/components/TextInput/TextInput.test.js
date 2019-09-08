import React from 'react';
import { mount, shallow, render } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders without error', () => {});

  test('showLabel  check', () => {
    const wrapper = shallow(<TextInput showLabel label="text" />); // mount/render/shallow when applicable
    expect(wrapper.find('label').text()).toBe('text');
  });
});
