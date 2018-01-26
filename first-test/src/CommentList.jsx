import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {

  handleDeleteComment(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <div>{this.props.comments.map((comment, i)=> <Comment comment = {comment} key = {i} index = {i} onDeleteComment = {this.handleDeleteComment.bind(this)}/> )}</div>
    );
    
  }
}

CommentList.defaultProps = {
  comments: []
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList;