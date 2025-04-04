import { combineReducers } from 'redux';

import cardReducer from './card.reducer';
import modalReducer from './modal.reducer';

export default () =>
  combineReducers({
    card: cardReducer,
    modal: modalReducer
  });
