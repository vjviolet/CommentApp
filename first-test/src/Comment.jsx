import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      timeString: ''
    }
  }

  componentWillMount() {
    this._updateTimeString();
    this._timer = setInterval(this._updateTimeString.bind(this), 5000);
  }

  _updateTimeString() {
    const comment = this.props .comment;
    const duration = (+Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration/60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
    });
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  handleDeleteComment() {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  render() {
    return (
      <div className="comment-list">
        <h6>{this.props.comment.username}</h6>
        <div className="comment">
          {this.props.comment.content}
        </div>
        <span className="comment-duration">
          {this.state.timeString}
        </span>
        <br />
        <span className="comment-delete" onClick = {this.handleDeleteComment.bind(this)}>
          删除
        </span>
        <hr />
      </div>

    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onDeleteComment: PropTypes.func,
  index: PropTypes.number
}

export default Comment;