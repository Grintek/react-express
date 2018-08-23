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
    const style = Object.assign({}, {lineHeight: '33px'}, this.props.style);

    return (
      <Button {...this.props} style={style}>
        {React.Children.toArray(this.props.children)}
      </Button>
    );
  }
}

export default StyledFlatButton;
