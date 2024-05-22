import React from 'react';
import STAR from '../../../public/asset/img/images/star.png'
import CIRCLE from '../../../public/asset/img/images/circle.png'
import DIAMOND from '../../../public/asset/img/images/diamond.png'
import TRIANGLE from '../../../public/asset/img/images/triangle.png'


const MagicButton = () => {
  return (
    <div className="container">
      <a href="#" className="button">
        <div className="button__content">
          <span className="button__text">Download</span>
          <i className="ri-download-cloud-fill button__icon"></i>
          <div className="button__reflection-1"></div>
          <div className="button__reflection-2"></div>
        </div>
        <img src={STAR} alt="" className="button__star-1" />
        <img src={STAR} alt="" className="button__star-2" />
        <img src={CIRCLE} alt="" className="button__circle-1" />
        <img src={CIRCLE} alt="" className="button__circle-2" />
        <img src={DIAMOND} alt="" className="button__diamond" />
        <img src={TRIANGLE} alt="" className="button__triangle" />
        <div className="button__shadow"></div>
      </a>
    </div>
  );
};

export default MagicButton;
