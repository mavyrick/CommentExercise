import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'whatwg-fetch';
import CommentForm from './CommentForm.js';
import CommentContainer from './CommentContainer.js';

class App extends Component {

 constructor() {
  super();
  this.state = { 
    data: [],
    error: null,
    email: '',
    message: ''
  };
  this.pollInterval = null;
}

componentDidMount() {
  this.loadCommentsFromServer();
  if (!this.pollInterval) {
    this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
  }
}

componentWillUnmount() {
  if (this.pollInterval) clearInterval(this.pollInterval);
  this.pollInterval = null;
}

loadCommentsFromServer = () => {
  fetch('/api/comments/')
  .then(data => data.json())
  .then((res) => {
    if (!res.success) this.setState({ error: res.error });
    else this.setState({ data: res.data });
  })
}

onChangeText = (e) => {
  const newState = { ...this.state };
  newState[e.target.name] = e.target.value;
  this.setState(newState);
}

onDeleteComment = (id) => {
  const i = this.state.data.findIndex(c => c._id === id);
  const data = [
  ...this.state.data.slice(0, i),
  ...this.state.data.slice(i + 1),
  ];
  this.setState({ data });
  fetch(`api/comments/${id}`, { method: 'DELETE' })
  .then(res => res.json()).then((res) => {
    if (!res.success) this.setState({ error: res.error });
  });
}

submitComment = (e) => {
  e.preventDefault();
  const { email, message } = this.state;
  const data = [...this.state.data, { email, message, _id: Date.now().toString() }];
  this.setState({ data });
  if (!email || !message) return;
  fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, message }),
  }).then(res => res.json()).then((res) => {
    if (!res.success) this.setState({ error: res.error.message || res.error });
    else this.setState({ email: '', message: '', error: null });
  });
}

render() {
  return (
    <div className="app-wrapper">
    <div className="test-align">
    <div className="comment-form">
    <CommentForm
    email={this.state.email}
    message={this.state.message}
    handleChangeText={this.onChangeText}
    submitComment={this.submitComment}
    />
    </div>
    <div className="comment-container">
    <CommentContainer
    data={this.state.data}
    handleDeleteComment={this.onDeleteComment}
    />
    </div>
    {this.state.error && <p>{this.state.error}</p>}
    </div>
    </div>
    );
}
}

export default App;
