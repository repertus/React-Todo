import React from 'react';
import { mount } from 'enzyme';

import TaskType from './index';

describe('TaskType', () => {
  const wrapper = mount(<TaskType />);
  it('should contains specific options', () => {
    expect(wrapper.find('Select').props().options).toHaveLength(4);
  });
});
