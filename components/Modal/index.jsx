import React from 'react';
import './style.sass';
import { connect } from 'react-redux';
import { closeModal } from '../../store/actions/modal.action';
import { useTranslation } from 'react-i18next';
import close from 'url:../../assets/images/closeIcon.svg';

export default connect(
  (state) => ({
    isOpen: state.modal.isOpen,
    data: state.modal.data,
  }),
  {
    closeModal,
  }
)(({ isOpen, data, closeModal }) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div className='modalOverlay' onClick={closeModal}>
      <button className='btnClose' onClick={closeModal}>
        <img src={close} />
      </button>
      <div className='modalContent' onClick={(e) => e.stopPropagation()}>
        <div className='namedVariants'>
          <p className='textTitleVariants'>{data.title}</p>
          <img className='imgTitleVariants' src={data.modal.icon} />
        </div>
        <div className='blockAllDescription'>
          <div className='blockGeneralDescriptionModal'>
            <p className='modalDescriptionText'>{data.modal.descriptionOne}</p>
            <p className='modalDescriptionTwoText'>{data.modal.descriptionTwo}</p>
            <img className='imageDescriptionBlock' src={data.image} />
          </div>
          <div className='blockDescriptionCoverAndPage'>
            <div className='blockDescriptionCover'>
              <p className='textCover'>{t('modal.cover_title')}</p>
              <div className='strAndDescription'>
                <p className='namedStr'>{t('modal.cover_type')}</p>
                <div className='textDescriptionStr'>
                  <p className='descriptionStr'>{data.modal.cover.typeCover}</p>
                </div>
              </div>
              <div className='strAndDescription'>
                <p className='namedStr'>{t('modal.cover_material')}</p>
                <div className='textDescriptionStr'>
                  <p className='descriptionStr'>{data.modal.cover.material}</p>
                </div>
              </div>
              <div className='strAndDescription'>
                <p className='namedStr'>{t('modal.cover_print')}</p>
                <div className='textDescriptionStr'>
                  <p className='descriptionStr'>{data.modal.cover.print}</p>
                </div>
              </div>
              <div className='strAndDescription'>
                <p className='namedStr'>{t('modal.cover_binding')}</p>
                <div className='textDescriptionStr'>
                  <p className='descriptionStr'>{data.modal.cover.binding}</p>
                </div>
              </div>
            </div>
            <div className='blockDescriptionPages'>
              <p className='textPages'>{t('modal.pages_title')}</p>
              <div className='blockDescriptionCover'>
                <div className='strAndDescription'>
                  <p className='namedStr'>{t('modal.pages_material')}</p>
                  <div className='textDescriptionStr'>
                    <p className='descriptionStr'>{data.modal.pages.material}</p>
                  </div>
                </div>
                <div className='strAndDescription'>
                  <p className='namedStr'>{t('modal.pages_print')}</p>
                  <div className='textDescriptionStr'>
                    <p className='descriptionStr'>{data.modal.pages.print}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});