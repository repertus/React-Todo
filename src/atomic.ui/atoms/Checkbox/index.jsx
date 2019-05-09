import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);

    const { initStatus } = this.props;

    this.state = {
      checked: initStatus,
    };

    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleCheckBoxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    const { checked } = this.state;

    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={this.handleCheckBoxChange}
      />
    );
  }
}

CheckBox.propTypes = {
  initStatus: PropTypes.bool,
};

CheckBox.defaultProps = {
  initStatus: true,
};

export default CheckBox;
