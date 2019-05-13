import React from 'react';
import { storiesOf } from '@storybook/react';

import TaskPriority from './index';

storiesOf('Molecules', module).add('Task Priority Select', () => (
  <TaskPriority />
));
