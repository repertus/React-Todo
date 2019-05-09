import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Atoms', module).add('Button', () => <Button title="Hey There" />);
