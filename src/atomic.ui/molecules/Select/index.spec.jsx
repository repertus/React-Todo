// Dependencies
import React from 'react';
import renderer from 'react-test-renderer';

// Component to test...
import Select from './index';

const text = 'Label Text';
const options = [
  {
    value: 'a_high',
    text: 'A high priority item',
  },
  {
    value: 'b_medium',
    text: 'A medium priority item',
  },
  {
    value: 'c_low',
    text: 'A low priority item',
  },
];

describe('Select molecule tests', () => {
  test('Render simple select', () => {
    const component = renderer.create(<Select text={text} options={options} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
