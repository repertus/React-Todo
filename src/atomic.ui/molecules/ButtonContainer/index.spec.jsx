import React from 'react';
import renderer from 'react-test-renderer';

import ButtonContainer from './index';

describe('ButtonContainer molecule tests', () => {
  test('Render component', () => {
    const component = renderer.create(<ButtonContainer />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
