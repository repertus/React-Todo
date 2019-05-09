// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Components to test...
import Input from './index';

describe('Input', () => {
  const wrapper = shallow(<Input />);

  it('should render Input component', () => {
    expect(wrapper.length).toBe(1);
  });
});
