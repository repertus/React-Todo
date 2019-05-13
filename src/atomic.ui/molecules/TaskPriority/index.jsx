import React, { Component } from 'react';

import Select from '../Select/index';
import { TaskPriorityDiv } from './index.styling';

class TaskPriority extends Component {
  render() {
    const text = 'Priority';
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

    return (
      <TaskPriorityDiv>
        <Select text={text} options={options} />
      </TaskPriorityDiv>
    );
  }
}

export default TaskPriority;
