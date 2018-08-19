import {createAction} from 'redux-actions';

import api from 'api/index';

function* createGuidGenerator() {
  let i = 1;
  while (i) {
    yield i++;
  }
}

const guidGenerator = createGuidGenerator();

export const API_REQUEST_STARTED = 'API_REQUEST_STARTED';
export const apiRequestStarted = createAction(API_REQUEST_STARTED);
export const API_REQUEST_FINISHED = 'API_REQUEST_FINISHED';
export const apiRequestFinished = createAction(API_REQUEST_FINISHED);

export const API_DATA_BOOKS_LOADED = 'API_DATA_BOOKS_LOADED';
export const apiDataBooksLoaded = createAction(API_DATA_BOOKS_LOADED);

export const API_DATA_BOOK_LOADED = 'API_DATA_BOOK_LOADED';
export const apiDataBookLoaded = createAction(API_DATA_BOOK_LOADED);

/**
 * Получить книги
 * @param callback
 * @returns {function(*): Promise<T | never>}
 */
export function apiGetBooks(callback) {
  return function dispatchApiGetBooks(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({requestId}));
    return api
      .getBooks()
      .then((data) => {
        dispatch(apiDataBooksLoaded(data));
        dispatch(apiRequestFinished({requestId}));
        if (callback) {
          callback(); // get rid of callback here?
        }
      })
      .catch((error) => {
        dispatch(apiRequestFinished({requestId, error}));
      });
  };
}

/**
 * Получить книгу
 * @param id
 * @param callback
 * @returns {function(*): Promise<T | never>}
 */
export function apiGetBook(id, callback) {
  return function dispatchApiGetBook(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({requestId}));
    return api
      .getBook(id)
      .then((data) => {
        dispatch(apiDataBookLoaded(data));
        dispatch(apiRequestFinished({requestId}));
        if (callback) {
          callback(); // get rid of callback here?
        }
      })
      .catch((error) => {
        dispatch(apiRequestFinished({requestId, error}));
      });
  };
}

/**
 * Добавить книги
 * @param data
 * @param callback
 * @returns {function(*): Promise<T | never>}
 */
export function apiAddBook(data, callback) {
  return function dispatchApiAddBook(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({requestId}));
    return api
      .addBook(data)
      .then(() => {
        //dispatch(apiGetBooks());
        dispatch(apiRequestFinished({requestId}));
        if (callback) {
          callback(); // get rid of callback here?
        }
      })
      .catch((error) => {
        dispatch(apiRequestFinished({requestId, error}));
      });
  };
}
