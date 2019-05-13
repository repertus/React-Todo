import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from '../Select/index';
import { TaskTypeDiv } from './index.stying';

class TaskType extends Component {
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
      <TaskTypeDiv>
        <Select text={text} options={options} />
      </TaskTypeDiv>
    );
  }
}

TaskType.propTypes = {
  text: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

TaskType.defaultProps = {
  text: 'Type',
  options: [
    {
      value: 1,
      text: 'Home',
    },
    {
      value: 2,
      text: 'Work',
    },
    {
      value: 3,
      text: 'Personal',
    },
    {
      value: 4,
      text: 'School',
    },
  ],
};

export default TaskType;
