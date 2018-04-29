import React from 'react';
import PropTypes from 'prop-types';

const Edge = ({ classes }) => (
  <div className={`Edge ${classes}`}>
    <svg viewBox="0 0 250 61" preserveAspectRatio="none">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Artboard" stroke="#979797">
          <path
            d="M0,60 C102.555184,60 160.564966,2.62863187e-15 250,0"
            id="Path"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </g>
    </svg>
  </div>
);

Edge.defaultProps = {
  classes: '',
};

Edge.propTypes = {
  classes: PropTypes.string,
};

export default Edge;
