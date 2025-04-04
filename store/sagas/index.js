import { all, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { cardSaga } from './card.saga';
import { modalSaga } from './modal.saga';

export default function* () {
  yield take(REHYDRATE);
  yield all([cardSaga(), modalSaga()]);
}
