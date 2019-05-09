import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LabelStyling } from './index.styling';

class Label extends PureComponent {
  render() {
    const { text } = this.props;

    return <LabelStyling>{text}</LabelStyling>;
  }
}

Label.propTypes = {
  text: PropTypes.string,
};

export default Label;
