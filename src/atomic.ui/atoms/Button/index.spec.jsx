// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Component to test...
import Button from './index';

describe('Button', () => {
  const wrapper = shallow(<Button>Button Test</Button>);
  const wrapperWithProps = shallow(<Button title="Title" />);

  it('should render Button component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render the title prop', () => {
    expect(wrapperWithProps.text()).toBe('Title');
  });
});
