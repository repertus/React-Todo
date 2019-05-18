import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SortButtonStyling } from './index.styling';
import Button from '../../atoms/Button/index';

class SortButtons extends Component {
  render() {
    const { highPriority, lowPriority, alphaOrder } = this.props;

    return (
      <SortButtonStyling>
        <Button title={highPriority} />
        <Button title={lowPriority} />
        <Button title={alphaOrder} />
      </SortButtonStyling>
    );
  }
}

SortButtons.propTypes = {
  highPriority: PropTypes.string,
  lowPriority: PropTypes.string,
  alphaOrder: PropTypes.string,
};

SortButtons.defaultProps = {
  highPriority: 'Order by Highest Priority',
  lowPriority: 'Order by Lowest Priority',
  alphaOrder: 'Order Alphabetically',
};

export default SortButtons;
