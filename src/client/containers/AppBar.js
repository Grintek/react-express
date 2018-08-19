import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';

import NavigationButton from 'components/NavigationButton';

export default class AppBar extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup style={{paddingLeft: 20}} firstChild>
          <ActionBookmarkBorder color="white" style={{height: 40, width: 40, marginRight: 30}} />
          <NavigationButton to="/" label="Книги" exact />
          <NavigationButton to="/books/add" label="Добавить книгу" exact />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
