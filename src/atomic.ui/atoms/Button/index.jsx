// @flow
import React, { PureComponent } from 'react';

import { ButtonStyling } from './index.styling';

type Props = {
  title?: string,
};

class Button extends PureComponent<Props> {
  static defaultProps = {
    title: 'Hello',
  };

  render() {
    const { title } = this.props;

    return <ButtonStyling>{title}</ButtonStyling>;
  }
}

export default Button;
