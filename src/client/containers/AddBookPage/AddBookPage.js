import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {FormattedMessage} from 'react-intl';
import {history} from '../../helpers/history';
import {apiAddBook} from '../../api/actions';
import {Redirect} from 'react-router-dom';

export class AddBookPage extends React.Component {
  state = {
    isAddBook: false
  };
  static propTypes = {
    addBook: PropTypes.func.isRequired
  };

  componentDidMount() {}

  render() {
    if (this.state.isAddBook === true) {
      return <Redirect to="/" />;
    }

    return (
      <section style={{padding: 20}}>
        <TextField
          style={{marginRight: 10}}
          onChange={(e, value) => {
            this.nameTextFieldValue = value;
          }}
          hintText={<FormattedMessage id="app.addBook.name" defaultMessage="Название" />}
        />
        <TextField
          style={{marginRight: 10}}
          onChange={(e, value) => {
            this.authorTextFieldValue = value;
          }}
          hintText={<FormattedMessage id="app.addBook.author" defaultMessage="Автор" />}
        />
        <TextField
          style={{marginRight: 10}}
          onChange={(e, value) => {
            this.descriptionTextFieldValue = value;
          }}
          hintText={<FormattedMessage id="app.addBook.description" defaultMessage="Описание" />}
        />

        <RaisedButton
          label={<FormattedMessage id="app.addBook.button" defaultMessage="Добавить книгу" />}
          onClick={() => {
            this.addBook({
              name: this.nameTextFieldValue,
              description: this.descriptionTextFieldValue,
              author: this.authorTextFieldValue
            });
          }}
        />
      </section>
    );
  }

  addBook(data) {
    this.props.addBook(data);
    this.setState(() => ({
      isAddBook: true
    }));
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBook(data) {
      dispatch(apiAddBook(data));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddBookPage);
