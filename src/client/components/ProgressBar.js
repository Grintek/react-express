import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {primary} from '@material-ui/core/colors';

export default class ProgressBar extends React.Component {
  render() {
    return <LinearProgress mode="indeterminate" color={primary} />;
  }
}
