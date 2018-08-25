import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {FormattedMessage} from 'react-intl';
import {apiAddBook} from '../../api/actions';
import {Redirect} from 'react-router-dom';

export class AddBookPage extends React.Component {
  state = {
    isAddBook: false,
    name: '',
    author: '',
    description: ''
  };

  static propTypes = {
    addBook: PropTypes.func.isRequired
  };

  nameTextFieldValue = (e) => {
    this.setState({name: e.target.value});
  };
  authorTextFieldValue = (e) => {
    this.setState({author: e.target.value});
  };
  descriptionTextFieldValue = (e) => {
    this.setState({description: e.target.value});
  };

  render() {
    if (this.state.isAddBook === true) {
      return <Redirect to="/" />;
    }

    return (
      <section style={{padding: 20}}>
        <TextField
          style={{marginRight: 10}}
          onChange={this.nameTextFieldValue}
          label={<FormattedMessage id="app.addBook.name" defaultMessage="Название" />}
        />
        <TextField
          style={{marginRight: 10}}
          onChange={this.authorTextFieldValue}
          label={<FormattedMessage id="app.addBook.author" defaultMessage="Автор" />}
        />
        <TextField
          style={{marginRight: 10}}
          onChange={this.descriptionTextFieldValue}
          label={<FormattedMessage id="app.addBook.description" defaultMessage="Описание" />}
        />

        <Button
          children={<FormattedMessage id="app.addBook.button" defaultMessage="Добавить книгу" />}
          color="primary"
          onClick={() => {
            this.addBook({
              name: this.state.name,
              author: this.state.author,
              description: this.state.description
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
