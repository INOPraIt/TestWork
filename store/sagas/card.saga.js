import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../utils/store/helpers';
import { selectCardVariant, selectCardVariantAsync } from '../actions/card.action';

function* handleSelectCardVariants(variant) {
  return variant;
}

export function* cardSaga() {
  yield takeEvery(selectCardVariant, bindAsyncActions(selectCardVariantAsync)(handleSelectCardVariants));
}
