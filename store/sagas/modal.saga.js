import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import { openModal, openModalAsync, closeModal, closeModalAsync } from '../actions/modal.action';

function* handleOpenModal(data) {
  return data;
}

function* handleCloseModal() {
  return true;
}

export function* modalSaga() {
  yield takeEvery(openModal, bindAsyncActions(openModalAsync)(handleOpenModal));
  yield takeEvery(closeModal, bindAsyncActions(closeModalAsync)(handleCloseModal));
}