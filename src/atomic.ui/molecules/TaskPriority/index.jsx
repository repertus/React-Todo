import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from '../Select/index';
import { TaskPriorityDiv } from './index.styling';

class TaskPriority extends Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = event => {
    const option = event.value;
  };

  render() {
    const { text } = this.props;
    const { options } = this.props;

    return (
      <TaskPriorityDiv>
        <Select text={text} options={options} onChange={this.handleSelection} />
      </TaskPriorityDiv>
    );
  }
}

TaskPriority.propTypes = {
  text: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

TaskPriority.defaultProps = {
  text: 'Priority',
  options: [
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
  ],
};

export default TaskPriority;
