import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({tripCost, options}) => {
  const totalPrice = calculateTotal(tripCost, options);
  const price = formatPrice(totalPrice);
  return (
    <h2 className={styles.component}>
        Total: <strong>{price}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;