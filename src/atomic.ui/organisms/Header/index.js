import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderStyling } from './index.styling';

class Header extends PureComponent {
  render() {
    const { title } = this.props;

    return (
      <HeaderStyling>
        <h1>{title}</h1>
      </HeaderStyling>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'My To Do List',
};

export default Header;
