import React from 'react';
import PropTypes from 'prop-types';
import styles from './HorizontalGrownFlex.css';

function HorizontalGrownFlex(props) {
  return <div className='HorizontalGrownFlex'>{props.children}</div>;
}

HorizontalGrownFlex.propTypes = {
    children:PropTypes.array.isRequired,
};

export default HorizontalGrownFlex;
