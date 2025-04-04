import { useTranslation } from 'react-i18next';
import React from 'react';

import './style.sass';
import ProgressBar from '../../components/ProgressBar';
import CardVarints from '../../components/CardVarints';
import Modal from '../../components/Modal';

import arrow from 'url:../../assets/images/iconArrow.svg';

export default () => {
  const { t } = useTranslation();

  return (
    <div className='homeContainer'>
      <div className='progressBar'>
        <ProgressBar />
      </div>
      <p className='textHomeAddFormat'>{t('home.select_format')}</p>
      <p className='textThreeVariants'>{t('home.three_variants')}</p>
      <div className='variantsBook'>
        <CardVarints />
      </div>
      <button className='btnPlaceAnOrder'>
        <p className='textPlaceAnOrder'>
          {t('home.place_order')}
        </p>
        <div className='iconBtnPlaceAnOrder'>
          <img
            className='imageBtnPlaceAnOrder'
            src={arrow}
          />
        </div>
      </button>
      <Modal />
    </div>
  );
};