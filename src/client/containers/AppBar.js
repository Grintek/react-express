import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddToHomeScreenTwoTone from '@material-ui/icons/BookmarkBorder';
import blue from '@material-ui/core/colors/blue';
import NavigationButton from 'components/NavigationButton';
//import NavigationButton from '@material-ui/core/BottomNavigationAction';

const tool = {background: blue[100]};
const icon = {height: 40, width: 40, marginRight: 30};
export const AppBar = () => {
  return (
    <Toolbar style={tool}>
      <Typography style={{paddingLeft: 20}}>
        <AddToHomeScreenTwoTone color="primary" style={icon} />
        <NavigationButton to="/" label="Книги" exact />
        <NavigationButton to="/books/add" label="Добавить книгу" exact />
      </Typography>
    </Toolbar>
  );
};
