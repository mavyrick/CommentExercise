import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'react-popup';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
var MD5 = require('md5.js')
var hash = new MD5().update("test@test.com").digest('hex')

const Comment = props => (
	<div className="comment-wrapper">
	<img className="avatar" src={"https://www.gravatar.com/avatar/" + hash} />
	<h4 className="email">{props.email}</h4>
	<h4 className="message">{props.message}</h4>
	<Button className="delete-button" onClick={() => { props.handleDeleteComment(props.id); }} bsStyle="danger" bsSize="small">
	<Glyphicon glyph="remove" />
	</Button>
	</div>    
	);

Comment.propTypes = {
	email: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleDeleteComment: PropTypes.func.isRequired,
	timestamp: PropTypes.string.isRequired,
}

export default Comment;