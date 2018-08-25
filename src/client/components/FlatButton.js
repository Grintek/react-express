import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class StyledFlatButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
  };

  static defaultProps = {
    children: null,
    style: {}
  };

  render() {
    const style = Object.assign({}, this.props.style);
    return <Button labal={this.props.label} color="secondary" {...this.props} style={style} />;
  }
}

export default StyledFlatButton;
