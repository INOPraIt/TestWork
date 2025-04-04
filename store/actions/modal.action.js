import { createActionFactory } from '../../utils/store/helpers';

const factory = createActionFactory('MODAL');

export const openModal = factory.create('OPEN_MODAL');
export const openModalAsync = factory.createAsync('OPEN_MODAL_ASYNC');

export const closeModal = factory.create('CLOSE_MODAL');
export const closeModalAsync = factory.createAsync('CLOSE_MODAL_ASYNC');