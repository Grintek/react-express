import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {FormattedMessage} from 'react-intl';
import {apiAddBook, apiGetAuthor} from '../../api/actions';
import {Redirect} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class AddBookPage extends React.Component {
  state = {
    isAddBook: false,
    name: '',
    author: '',
    authors: 'Dzho Dispenza',
    description: ''
  };

  static propTypes = {
    addBook: PropTypes.func.isRequired,
    authors: PropTypes.object.isRequired,
    apiGetAuthor: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.apiGetAuthor();
  }
  nameTextFieldValue = (e) => {
    this.setState({name: e.target.value});
  };
  authorSelect = (e) => {
    this.setState({authors: e.target.value});
  };
  descriptionTextFieldValue = (e) => {
    this.setState({description: e.target.value});
  };

  render() {
    const {authors} = this.props;
    if (this.state.isAddBook === true) {
      return <Redirect to="/" />;
    }

    return (
      <section style={{padding: 20}}>
        {console.log(authors)}
        <TextField
          style={{marginRight: 10}}
          onChange={this.nameTextFieldValue}
          label={<FormattedMessage id="app.addBook.name" defaultMessage="Название" />}
        />
        <FormControl style={{marginRight: 10}}>
          <InputLabel htmlFor="age-native-simple">Author</InputLabel>
          <Select native value={this.state.authors} onChange={this.authorSelect}>
            {authors.map(({id, author}) => (
              <option key={id} value={author}>
                {author}
              </option>
            ))}
          </Select>
        </FormControl>
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
              author: this.state.authors,
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

function mapStateToProps(state) {
  return {
    authors: state.api.getIn(['data', 'authors'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBook(data) {
      dispatch(apiAddBook(data));
    },
    apiGetAuthor(data) {
      dispatch(apiGetAuthor(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookPage);
