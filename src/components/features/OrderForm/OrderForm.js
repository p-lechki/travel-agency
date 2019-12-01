import React from 'react';
// import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import Pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
// import {setOrderOption} from '../../../redux/orderRedux';

const OrderForm = ({tripCost, options}) => (
  <Row>
    {Pricing.map((option, setOrderOption) => (
      <Col ms={4} key={option.id}>
        <OrderOption key={option.id} {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}  />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;