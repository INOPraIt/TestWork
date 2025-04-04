import React from 'react';
import './style.sass';
import { connect } from 'react-redux';
import { selectCardVariant } from '../../store/actions/card.action';
import { cardData } from './cardData';
import { openModal } from '../../store/actions/modal.action';
import { useTranslation } from 'react-i18next';

import hit from 'url:../../assets/images/imageHit.png';

export default connect(
  (s) => ({
    selectedCard: s.card.selectedCard,
  }),
  {
    selectCardVariant,
    openModal,
  }
)(({ selectedCard, selectCardVariant, openModal }) => {
  const { t } = useTranslation();

  return (
    <>
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`containerCardVariants ${selectedCard?.id === card.id ? 'activeCard' : ''}`}
          onClick={() => selectCardVariant(card)}
        >
          <div className='imgCardVariants'>
            {card.hit && (
              <img
                className='hitImage'
                src={hit}
                alt={t('card.hit')}
              />
            )}
            <img
              className='imageCardVariants'
              src={card.image}
              alt={card.title}
            />
          </div>
          <div className='infoCardVariants'>
            <div className='strNamedAndMore'>
              <p className='textTarif'>{card.title}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  selectCardVariant(card);
                  openModal(card);
                }}
                className='btnMoreDetailed'
              >
                i
              </button>
            </div>
            <p className='textDescriptionVariant'>
              {t('card.description')}
            </p>
            <div className='strSizeAndPrice'>
              <p className='textSize'>{t('card.size')}</p>
              <p className='textPrice'>{t('card.price', { price: 3884 })}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
});