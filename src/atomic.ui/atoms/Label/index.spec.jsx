import React from 'react';
import { shallow } from 'enzyme';

import Label from './index';

describe('Label', () => {
  const wrapper = shallow(<Label />);
  const wrapperWithProps = shallow(<Label text="Text" />);

  it('should render Label component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render the text prop', () => {
    expect(wrapperWithProps.text()).toBe('Text');
  });
});
