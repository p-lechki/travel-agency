import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing';
import setOrderOption from '../../../redux/orderRedux';

const OrderForm = ({tripCost, options}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        {/*{console.log(option)}*/}
        <OrderOption key={option.id} {...option}
          currentValue={options[option.id]}
          setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  pricing: PropTypes.array,
};

export default OrderForm;