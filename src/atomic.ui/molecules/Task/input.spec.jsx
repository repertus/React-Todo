import React from 'react';
import renderer from 'react-test-renderer';

import Task from './index';

describe('Task molecule tests', () => {
  test('Render simple select', () => {
    const component = renderer.create(<Task />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
