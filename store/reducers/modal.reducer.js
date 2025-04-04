import { handleActions } from 'redux-actions';
import { openModalAsync, closeModalAsync } from '../actions/modal.action';

const initialState = {
  isOpen: false,
  data: null,
  error: null,
};

export default handleActions(
  {
    [openModalAsync.success]: (s, { payload }) => ({
      ...s,
      isOpen: true,
      data: payload,
    }),

    [openModalAsync.failed]: (s, { payload: { response } } = {}) => ({
      ...s,
      isOpen: false,
      data: null,
      error: response && response.status === 401 ? null : 'error',
    }),

    [closeModalAsync.success]: (s) => ({
      ...s,
      isOpen: false,
      data: null,
    }),

    [closeModalAsync.failed]: (s, { payload: { response } } = {}) => ({
      ...s,
      error: response && response.status === 401 ? null : 'error',
    }),
  },
  initialState
);