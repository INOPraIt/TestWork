import { handleActions } from 'redux-actions';
import { selectCardVariantAsync } from '../actions/card.action';

const initialState = {
  selectedCard: null,
  error: null,
};

export default handleActions(
  {
    [selectCardVariantAsync.success]: (s, { payload }) => ({
      ...s,
      selectedCard: payload,
      error: null,
    }),

    [selectCardVariantAsync.failed]: (s, { payload: { response } } = {}) => ({
      ...s,
      selectedCard: response && response.status === 401 ? null : s.selectedCard,
      error: response && response.status === 401 ? null : 'error',
    }),
  },
  initialState
);