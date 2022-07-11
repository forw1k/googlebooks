import React from 'react';
import './MyPreloader.scss';
import preloaderIcon from '../../assets/icons/loading-icon.svg';

function MyPreloader() {
  return (
    <div className="preloader">
      <img src={preloaderIcon} className="preloader__pic" alt="loading" />
    </div>
  );
}

export default MyPreloader;
