import React from 'react';
import { mount } from 'enzyme';

import TaskPriority from './index';

describe('TaskPriority', () => {
  const wrapper = mount(<TaskPriority />);
  it('should contain specific options', () => {
    expect(wrapper.find('Select').props().options).toHaveLength(3);
  });
});
