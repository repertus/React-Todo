import React from 'react';
import renderer from 'react-test-renderer';

import CheckBox from './index';

describe('CheckBox', () => {
  test('Toggle box', () => {
    const component = renderer.create(<CheckBox />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    // Toggle off check
    tree.props.onChange({
      target: { checked: false },
    });
    // Re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
