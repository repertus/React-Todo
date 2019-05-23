// @flow
import React, { PureComponent } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import {
  ButtonContainerStyling,
  DeleteButton,
  EditButton,
} from './index.styling';

// Font Awesome library initialization
library.add(faTrashAlt, faPencilAlt);

class ButtonContainer extends PureComponent<any> {
  render() {
    return (
      <ButtonContainerStyling>
        <EditButton>
          <FontAwesomeIcon icon="pencil-alt" size="sm" />
        </EditButton>
        <DeleteButton>
          <FontAwesomeIcon icon="trash-alt" size="sm" />
        </DeleteButton>
      </ButtonContainerStyling>
    );
  }
}

export default ButtonContainer;
