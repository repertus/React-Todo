// @flow
import React, { PureComponent } from 'react';

type Props = {
  initStatus?: boolean,
};

type State = {
  checked?: boolean,
};

class CheckBox extends PureComponent<Props, State> {
  static defaultProps = {
    initStatus: true,
  };

  constructor(props: any) {
    super(props);

    const { initStatus } = this.props;

    this.state = {
      checked: initStatus,
    };

    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleCheckBoxChange = (event: SyntheticEvent<HTMLInputElement>): void => {
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

export default CheckBox;
