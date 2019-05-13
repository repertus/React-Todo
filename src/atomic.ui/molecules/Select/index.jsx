import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SelectStyling, DivStyling } from './index.styling';
import Label from '../../atoms/Label/index';

class Select extends PureComponent {
  render() {
    const { options } = this.props;
    const { text } = this.props;

    return (
      <DivStyling>
        <Label text={text} />
        <SelectStyling>
          <option disabled value="select-value">
            -- Select --
          </option>
          {options.map(opt => (
            <option key={opt.text} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </SelectStyling>
      </DivStyling>
    );
  }
}

Select.propTypes = {
  text: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.string,
    })
  ),
};

export default Select;
