import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('CARD_VARIANT');

export const selectCardVariant = factory.create('SELECT_CARD_VARIANT');
export const selectCardVariantAsync = factory.createAsync('SELECT_CARD_VARIANT_ASYNC');