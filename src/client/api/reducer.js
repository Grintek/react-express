import {List, Map, OrderedMap} from 'immutable';

import {API_DATA_BOOK_LOADED, API_DATA_BOOKS_LOADED, API_REQUEST_FINISHED, API_REQUEST_STARTED} from 'api/actions';

const initialState = Map({
  loading: false,
  requests: OrderedMap({}),
  errors: Map({
    last: null
  }),
  lastUpdate: Map({
    books: null,
    book: null
  }),
  data: Map({
    books: List(),
    book: {id: 0, name: '', description: ''}
  })
});
/**
 * Обработка действий
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
export default function ApiReducer(state = initialState, action) {
  switch (action.type) {
    case API_REQUEST_STARTED:
      return state.setIn(['requests', action.payload.requestId], action.payload).set('loading', true);

    case API_REQUEST_FINISHED:
      return state
        .removeIn(['requests', action.payload.requestId])
        .set('loading', state.get('requests').size > 1)
        .setIn(
          ['errors', 'last'],
          action.payload.error ? action.payload.error.message : state.getIn(['errors', 'last'])
        );

    case API_DATA_BOOKS_LOADED:
      return state
        .setIn(['lastUpdate', 'books'], Date.now())
        .setIn(['data', 'books'], List(action.payload));

    case API_DATA_BOOK_LOADED:
      return state
        .setIn(['lastUpdate', 'book'], Date.now())
        .setIn(['data', 'book'], action.payload);
    default:
      return state;
  }
}
