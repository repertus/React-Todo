import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../../molecules/Task/index';
import TaskType from '../../molecules/TaskType/index';
import TaskPriority from '../../molecules/TaskPriority/index';
import Button from '../../atoms/Button/index';
import { TaskFormDiv, TaskFormTitle } from './index.styling';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {};

  render() {
    const { title } = this.props;
    const { buttonTitle } = this.props;

    return (
      <TaskFormDiv>
        <TaskFormTitle>{title}</TaskFormTitle>
        <form>
          <Task />
          <TaskPriority />
          <TaskType />
          <Button onClick={this.handleClick} title={buttonTitle} />
        </form>
      </TaskFormDiv>
    );
  }
}

TaskForm.propTypes = {
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
};

TaskForm.defaultProps = {
  title: 'Add Todo Item',
  buttonTitle: 'Submit',
};

export default TaskForm;
