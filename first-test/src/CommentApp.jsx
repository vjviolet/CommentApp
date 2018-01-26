import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentApp.css';
import WrapComment from './WrapComment';


class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data
    }
  }

  // componentWillMount() {
  //   this._loadComments();
  // }

  // _saveComments(comments) {
  //   localStorage.setItem('comments', JSON.stringify(comments));
  // }

  handleSubmitComment(comment) {
    if(!comment) return;
    if(!comment.username) alert('请输入用户名');
    if(!comment.content) alert('请输入评论');
    const comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments: comments
    });
    this.props.saveData(comments);
  };

  // _loadComments() {
  //   let comments = localStorage.getItem('comments');
  //   if(comments) {
  //     comments = JSON.parse(comments);
  //     this.setState({
  //       comments
  //     });
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(this._timer);
  // }

  handleDeleteComment(index) {
    let comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({
      comments: comments
    })
    this.props.saveData(comments);
  }

  render() {
    return (
      <div className = "wrapper">
        <CommentInput onSubmit = { this.handleSubmitComment.bind(this) }/>
        <CommentList comments = { this.state.comments } onDeleteComment = {this.handleDeleteComment.bind(this) }/>
      </div>
    );
  }
}

CommentApp = WrapComment(CommentApp, 'comments');

export default CommentApp;