import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue, currentValue}) => (
  <div className={styles.text}>
    <input type='text' name={currentValue} onChange={event=>setOptionValue(event.currentTarget.currentValue)} />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;