import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'react-popup';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import MD5 from 'md5.js';

class Comment extends Component {

	constructor(props) {
		super();
	}

	getHash = (commentEmail) => {
		return new MD5().update(commentEmail).digest('hex')
	}

	render() {
		return (
			<div className="comment-wrapper">
			<img className="avatar" src={"https://www.gravatar.com/avatar/" + this.getHash(this.props.email)} />
			<h4 className="email">{this.props.email}</h4>
			<h4 className="message">{this.props.message}</h4>
			<Button className="delete-button" onClick={() => { this.props.handleDeleteComment(this.props.id); }} bsStyle="danger" bsSize="xsmall">
			<Glyphicon glyph="remove" />
			</Button>
			</div> 

			)
	}	
};

Comment.propTypes = {
	email: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleDeleteComment: PropTypes.func.isRequired,
	timestamp: PropTypes.string.isRequired,
}

export default Comment;