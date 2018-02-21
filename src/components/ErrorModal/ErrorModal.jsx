import React from 'react';
// import PropTypes from 'prop-types';

import './ErrorModal.css';

export const ErrorModal = () => (
  <div className="ErrorModal">
    <h1 className="ErrorModal-message" >Oops No Books found!</h1>
    <h1 className="ErrorModal-message" >Import them Now?</h1>
    <button className="ErrorModal-button" onClick={event => this.props.onClick(event)} />
  </div>
);

export default ErrorModal;
