import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import NavigationButton from 'components/NavigationButton';

export const AppBar = () => {
  return (
    <Toolbar>
      <Typography style={{paddingLeft: 20}}>
        //тут должна быть картинка
        <NavigationButton to="/" label="Книги" exact />
        <NavigationButton to="/books/add" label="Добавить книгу" exact />
      </Typography>
    </Toolbar>
  );
};
