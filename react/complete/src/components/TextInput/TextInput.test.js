import React from 'react';
import { mount, shallow, render } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders without error', () => {});

  test('showLabel  check', () => {
    const wrapper = render(<TextInput showLabel label="text" />); // mount/render/shallow when applicable
    expect(wrapper.find('label')).toHaveText('text');
  });
});
