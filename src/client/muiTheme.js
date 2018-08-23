import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green, teal} from '@material-ui/core/colors';

export default getMuiTheme({
  fontSize: 14,
  fontFamily: 'Helvetica',
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
  }
});
