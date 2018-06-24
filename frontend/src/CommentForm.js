import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const CommentForm = props => (
  <div className="form-wrapper">
  <form onSubmit={props.submitComment}>
  <input 
  className="email-input input-style"
  type="email"
  name="email"
  placeholder="Email"
  value={props.email}
  onChange={props.handleChangeText}
  />
  <br />
  <br />
  <textarea
  className="comment-input input-style"
  rows="10"
  type="text"
  name="message"
  placeholder="Comment"
  value={props.message}
  onChange={props.handleChangeText}
  />
  <br />
  <Button
  className = "submit-button"
  type="submit"
  bsStyle="info" 
  bsSize="large">SUBMIT
  </Button>
  </form>
  </div>
  );

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  email: PropTypes.string,
  message: PropTypes.string,
}

CommentForm.defaultProps = {
  email: '',
  message: '',
}

export default CommentForm;