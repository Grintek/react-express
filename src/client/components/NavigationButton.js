import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {lime, green} from '@material-ui/core/colors';
import FlatButton from 'components/FlatButton';

class NavigationButton extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    exact: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    exact: false
  };

  render() {
    const {to, label, ...props} = this.props;
    const activeStyle = {
      backgroundColor: green[200],
      padding: '10px 0px 12px 0px',
      borderRadius: 4,
      margin: 'auto',
      boxSizing: 'content-box'
    };
    const buttonStyle = {color: lime[900], marginLeft: 0};

    return (
      <NavLink style={{textDecoration: 'none'}} to={to} activeStyle={activeStyle} {...props}>
        <FlatButton children={label} style={buttonStyle} />
      </NavLink>
    );
  }
}

export default NavigationButton;
