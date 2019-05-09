import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input/index';
import Label from '../../atoms/Label/index';
import { TaskDivStyling } from './index.styling';

class Task extends Component {
  render() {
    const { text } = this.props;

    return (
      <TaskDivStyling>
        <Label text={text} />
        <Input />
      </TaskDivStyling>
    );
  }
}

Task.propTypes = {
  text: PropTypes.string,
};

Task.defaultProps = {
  text: 'Task',
};

export default Task;
