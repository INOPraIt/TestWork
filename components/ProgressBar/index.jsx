import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.sass';

import iconPerson from 'url:../../assets/images/iconPerson.svg';
import iconFoto from 'url:../../assets/images/iconFoto.svg';
import iconStars from 'url:../../assets/images/iconStars.svg';
import iconFormat from 'url:../../assets/images/iconFormat.svg';
import iconBook from 'url:../../assets/images/iconBook.svg';

export default () => {
  const { t } = useTranslation();

  return (
    <div className='progressBarContainer'>
      <div className='stepsBlock'>
        <div className='stepBlockNotFlooded'>
          <div className='step'>
            <img src={iconPerson} className='imgStep' />
            <p className='textStep'>
              {t('progress.character_creation')}
            </p>
          </div>
          <div className='step'>
            <img src={iconFoto} className='imgStep' />
            <p className='textStep'>
              {t('progress.upload_photo')}
            </p>
          </div>
          <div className='step'>
            <img src={iconStars} className='imgStep' />
            <p className='textStep'>
              {t('progress.book_creation')}
            </p>
          </div>
          <div className='step'>
            <img src={iconFormat} className='imgStep' />
            <p className='textStep'>
              {t('progress.select_format')}
            </p>
          </div>
          <div className='step'>
            <img src={iconBook} className='imgStep' />
            <p className='textStep' style={{ color: '#8E8E83' }}>
              {t('progress.book_ready')}
            </p>
          </div>
        </div>
        <div className='stepBlockNotFloodedMini'>
          <div className='stepMini'>
            <img src={iconFormat} className='imgStep' />
            <p className='textStep'>
              {t('progress.select_format')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};