import React, { Component, Fragment } from 'react';

import Header from '../../organisms/Header';
import TaskForm from '../../organisms/TaskForm';
import SortButtons from '../../organisms/SortButtons';
import {
  GlobalStyling,
  TemplateStyling,
  ContainerStyling,
} from './index.styling';

class Todo extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyling />
        <TemplateStyling>
          <Header />
          <ContainerStyling>
            <TaskForm />
            <SortButtons />
          </ContainerStyling>
        </TemplateStyling>
      </Fragment>
    );
  }
}

export default Todo;
