import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {FormattedMessage, FormattedRelative} from 'react-intl';

import {apiAddBook, apiGetBooks} from 'api/actions';

import styles from './BooksPage.scss';
import {NavLink, Redirect} from 'react-router-dom';

export class BooksPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    books: PropTypes.object.isRequired,
    apiGetBooks: PropTypes.func.isRequired,
    apiAddBook: PropTypes.func.isRequired,
    booksLastUpdate: PropTypes.number
  };

  static defaultProps = {
    booksLastUpdate: null
  };

  state = {
    isSelectBook: false,
    path: ''
  };

  componentDidMount() {
    this.props.apiGetBooks();
  }

  onDepression = (e) => {
    this.setState({
      path: '/book/' + e,
      isSelectBook: true
    });
  };

  render() {
    const {books, booksLastUpdate} = this.props;

    /**
     * Редирект на страницу с книгой по id
     */
    if (this.state.isSelectBook === true) {
      return <Redirect to={this.state.path} />;
    }
    return (
      <section style={{padding: 20}}>
        <h2>
          <FormattedMessage id="app.books.title" defaultMessage="Книги" />
          {booksLastUpdate && (
            <span className={styles.lastUpdate}>
              (updated <FormattedRelative value={booksLastUpdate} />)
            </span>
          )}
        </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map(({id, name}) => (
              <TableRow key={id} onMouseUp={(e) => this.onDepression(id, e)}>
                <TableCell>{name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading'),
    books: state.api.getIn(['data', 'books']),
    booksLastUpdate: state.api.getIn(['lastUpdate', 'books'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetBooks() {
      dispatch(apiGetBooks());
    },
    apiAddBook(data) {
      dispatch(apiAddBook(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
