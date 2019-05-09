import React from 'react';
import { storiesOf } from '@storybook/react';

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

storiesOf('Molecules', module).add('Select dropdown', () => (
  <Select text={text} options={options} />
));
