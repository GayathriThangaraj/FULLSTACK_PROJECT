import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  return (
    <div className="gradient-background full-height">
      <div className="center-content">
        <h1 className="text-white fw-light m-0">
          Pure CSS Gradient Background Animation
        </h1>
        <div className="btn-group my-5">
          <a
            href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip"
            className="btn btn-outline-light"
            aria-current="page"
          >
            <i className="fas fa-file-download me-2"></i> SOURCE CODE
          </a>
          <a
            href="https://codepen.io/P1N2O/full/pyBNzX"
            className="btn btn-outline-light"
          >
            FULL SCREEN <i className="fas fa-expand ms-2"></i>
          </a>
        </div>
        <a href="https://manuel.pinto.dev" className="text-decoration-none">
          <h5 className="text-white fw-light m-0">— Pen by Manuel Pinto —</h5>
        </a>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
