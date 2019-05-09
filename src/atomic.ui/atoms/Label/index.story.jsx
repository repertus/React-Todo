import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from './index';

storiesOf('Atoms', module).add('Label', () => <Label text="Label Text" />);
