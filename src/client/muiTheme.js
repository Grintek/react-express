import {createMuiTheme} from '@material-ui/core/styles';
import {green, teal} from '@material-ui/core/colors';

export default createMuiTheme({
  fontSize: 14,
  fontFamily: 'Comforta',
  palette: {
    primary1Color: teal[700],
    primary2Color: teal[500],
    primary3Color: teal[300],
    accent1Color: green[600]
  },
  toolbar: {
    backgroundColor: teal[700]
  },
  flatButton: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 15,
    buttonFilterColor: green[600]
  },
  button: {
    height: 36
  },
  root: {
    flexGrow: 1
  }
});
