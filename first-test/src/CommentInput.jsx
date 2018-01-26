import React, { Component } from 'react';
import WrapComment from './WrapComment';

class CommentInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: props.data,
      //这里是要用户输入
      content: ''
    }
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleInput() {
    if(this.props.onSubmit) {
      //这里先将state的值赋给一个对象
      //const {username, content} = this.state;
      //传入父组件的props
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      });
    }
    this.setState({
      content: ''
    });
  }

  // _saveUsername(username) {
  //   localStorage.setItem('username', username);
  // }

  handleUsernameBlur(e) {
    this.props.saveData(e.target.value);
  }

  // _loadUsername() {
  //   const username = localStorage.getItem('username');
  //   if(username) {
  //     this.setState({
  //       username:username
  //     });
  //   }
  // }

  // componentWillMount() {
  //   this._loadUsername();
  // }

  componentDidMount() {
    this.textarea.focus();
  }

  render() {
    return(
      <div className="comment-field">
      <div className="comment-field-name">
        <span>用户名：</span>
      </div>
      <div className="comment-field-input">
        <input type="text" value = {this.state.username} onChange = {this.handleUsernameChange.bind(this)} onBlur = {this.handleUsernameBlur.bind(this)} />
      </div>
      <div className="comment-field-name">
        <span>评论： </span>
      </div>
      <div className = "comment-field-input">
        <textarea ref = {(textarea) => this.textarea = textarea} value = {this.state.content} onChange = { this.handleContentChange.bind(this)}></textarea>
      </div>

      <div className="comment-field-name">
        <button type="button" onClick = {this.handleInput.bind(this)}>发布</button>
      </div>
      </div>
    );
  }
}

CommentInput = WrapComment(CommentInput, 'username');

export default CommentInput;