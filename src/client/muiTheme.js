import {createMuiTheme} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import read from '@material-ui/core/colors/red';

export default createMuiTheme({
  fontSize: 14,
  fontFamily: 'Comforta',
  palette: {
    secondary: amber,
    primary: green
  },
  overrides: {
    MuiButton: {
      root: {
        marginLeft: 10,
        fontSize: 15,
        buttonFilterColor: green[600],
        color: 'white',
        textDecoration: 'none'
      }
    }
  },
  root: {
    flexGrow: 1
  }
});
