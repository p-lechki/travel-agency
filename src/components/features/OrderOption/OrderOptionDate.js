import React from 'react';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render () {
    return (
      <div className={styles.datepicker}>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
      </div>
    );
  }
}

export default OrderOptionDate;