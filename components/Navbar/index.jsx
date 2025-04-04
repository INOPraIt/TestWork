import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.scss';

import setlogo from 'url:../../assets/images/logo.png';
import iconNavbar from 'url:../../assets/images/icon.svg';
import iconCart from 'url:../../assets/images/cart.svg';
import iconMenu from 'url:../../assets/images/menu.svg';

export default () => {
  const { t } = useTranslation();

  return (
    <div className='containerNavbar'>
      <button className='btnCard'>
        <img className='imageCart' src={iconCart} />
      </button>
      <div className="logoNavbar">
        <img src={setlogo} alt="logo" />
      </div>
      <div className='linksNavbar'>
        <Link className='linkNavbar'>{t('navbar.catalog')}</Link>
        <Link className='linkNavbar'>{t('navbar.themes_events')}</Link>
        <Link className='linkNavbar'>{t('navbar.for_kids')}</Link>
        <Link className='linkNavbar'>{t('navbar.for_adults')}</Link>
        <Link className='linkNavbar'>{t('navbar.contacts')}</Link>
      </div>
      <div className="logoNavbarMini">
        <img src={setlogo} alt="logo" />
      </div>
      <div className='btnNav'>
        <button className="buttonNavbar">
          <div className='imageBtnBlock'>
            <img className="iconNavbar" src={iconNavbar} />
          </div>
          <p className='orderABookText'>{t('navbar.order_book')}</p>
        </button>
      </div>
      <button className='btnCard'>
        <img className='imageCart' src={iconMenu} />
      </button>
    </div>
  );
};