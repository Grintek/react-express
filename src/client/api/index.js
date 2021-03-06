const defaultParams = {
  mode: 'cors'
};

let endpoint = '';

function setEndpoint(value) {
  endpoint = value;
}

/**
 * Если ошибка
 * @param {String} url
 * @param {String} message
 * @param {Number} statusCode
 * @constructor
 */
function ApiError(url, message, statusCode) {
  this.url = url;
  this.message = message;
  this.statusCode = statusCode || '';
  this.title = 'API Error';
  this.stack = new Error().stack;
}

/**
 * ApiError
 * @param {String} url
 * @param {Error} error
 * @param {Number|undefined} statusCode
 * @throws {ApiError}
 */
function throwApiError(url, error, statusCode) {
  throw new ApiError(url, error, statusCode);
}

/**
 * @param {Object} params
 * @returns {Promise.<T>}
 * @private
 */
function _request(params) {
  let requestUrl;
  let requestParams;
  if (typeof params === 'string') {
    requestUrl = params;
    requestParams = {};
  } else {
    const {url, ...restParams} = params;
    requestUrl = url;
    requestParams = restParams;
  }
  let rawResponse;
  //Осуществляем запрос к серверу
  return fetch(requestUrl, {...defaultParams, ...requestParams})
    .then((response) => {
      rawResponse = response;
      return response.json();
    })
    .then((json) => {
      if (json && json.error) {
        return throwApiError(requestUrl, json.error, rawResponse.status);
      }
      return json;
    })
    .catch((error) => throwApiError(requestUrl, error.message));
}

// application api

/**
 * Загрузка книг
 * @returns {Promise<T>}
 */
function getBooks() {
  return _request(`${endpoint}/books`);
}
function getAuthors() {
  return _request(`${endpoint}/books/add`);
}

/**
 * Создвние книг
 * @param payload
 * @returns {Promise<T>}
 */
function addBook(payload) {
  return _request({
    url: `${endpoint}/books/add`,
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(payload),
    ...defaultParams
  });
}

/**
 * Загрузка книги по id
 * @param id
 * @returns {Promise<T>}
 */
function getBook(id) {
  return _request(`${endpoint}/book/${id}`);
}

export default {
  getBooks: getBooks,
  getAuthors: getAuthors,
  getBook: getBook,
  addBook: addBook,
  setEndpoint
};
