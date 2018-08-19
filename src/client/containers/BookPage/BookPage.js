import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Card from 'material-ui/Card';
import {FormattedMessage, FormattedRelative} from 'react-intl';

import {apiGetBook} from 'api/actions';

import styles from './BookPage.scss';

export class BookPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    apiGetBook: PropTypes.func.isRequired,
    bookLastUpdate: PropTypes.number,
    bookId: PropTypes.number
  };

  static defaultProps = {
    bookLastUpdate: null
  };

  componentDidMount() {
    const bookId = this.props.match.params.bookId;
    this.props.apiGetBook(bookId);
  }

  render() {
    const {book, bookLastUpdate} = this.props;

    if (book.id === 0) {
      return <section style={{padding: 20}} />;
    }

    return (
      <section style={{padding: 20}}>
        <h2>
          <FormattedMessage id="app.books.title" defaultMessage={'Книга ' + book.name} />
          {bookLastUpdate && (
            <span className={styles.lastUpdate}>
              (updated <FormattedRelative value={bookLastUpdate} />)
            </span>
          )}
        </h2>

        <Card style={{padding: 20}}>
          <h2>Название: </h2>
          <h4>{book.name}</h4>
          <br />
          <h2>Описание: </h2>
          <h4> {book.description}</h4>
          <br />
        </Card>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading'),
    book: state.api.getIn(['data', 'book']),
    bookLastUpdate: state.api.getIn(['lastUpdate', 'book'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetBook(data) {
      dispatch(apiGetBook(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
