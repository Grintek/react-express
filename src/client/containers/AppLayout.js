import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import {AppBar} from '../containers/AppBar';
import BooksPage from '../containers/BooksPage/BooksPage';
import BookPage from '../containers/BookPage/BookPage';
import AddBookPage from '../containers/AddBookPage/AddBookPage';
import ProgressBar from '../components/ProgressBar';

export const AppLayout = (props) => {
  const {loading} = props;
  const style = {position: 'fixed', width: '100%', zIndex: 10};
  const styles = {style};
  return (
    <section>
      <Paper elevation={1} style={styles}>
        <AppBar />
        {loading && <ProgressBar />}
      </Paper>
      <section style={{paddingTop: 50}}>
        <Switch>
          <Route exact path="/" component={BooksPage} />
          <Route exact path="/books" component={BooksPage} />
          <Route exact path="/books/add" component={AddBookPage} />
          <Route exact path="/book/:bookId" component={BookPage} />
          <Redirect to="/" />
        </Switch>
      </section>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

export default connect(mapStateToProps)(AppLayout);
