import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter.js';
import Comment from './Comment.js';

// const CommentContainer = props => {

  class CommentContainer extends Component {

   constructor(props) {
    super();
    this.state = { 
      filterData: ''
    };
  }

  myCallback = (dataFromFilter) => {
    this.setState({ filterData: dataFromFilter });
  }

  render() {

   const commentMap = this.props.data.map(comment => {
    if (comment.email === this.state.filterData || this.state.filterData === '') {
      return (
        <Comment 
        email={comment.email}
        message={comment.message}
        key={comment._id}
        id={comment._id}
        timestamp={comment.updatedAt}
        handleDeleteComment={this.props.handleDeleteComment}
        >
        { comment.message }
        </Comment> 
        )
    }
  })
   return (
    <div className="container-wrapper">
    <Filter handleFilter={this.myCallback} />
    <div>
    { commentMap }
    </div>
    </div>
    )
 }
}

CommentContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  })),
  handleDeleteComment: PropTypes.func.isRequired,
}

CommentContainer.defaultProps = {
  data: [],
};

export default CommentContainer;