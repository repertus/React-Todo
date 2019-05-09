import React, { PureComponent } from 'react';
import { string } from 'prop-types';

import { ButtonStyling } from './index.styling';

class Button extends PureComponent {
  render() {
    const { title } = this.props;

    return <ButtonStyling>{title}</ButtonStyling>;
  }
}

Button.propTypes = {
  title: string,
};

Button.defaultProps = {
  title: '',
};

export default Button;
