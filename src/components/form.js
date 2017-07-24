import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      pilot: ''
    }

    this.props ? this.setState({ pilot: this.props.pilot }) : undefined;

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.props.handleInput(event.target.value);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.pilot !== this.state.pilot ? this.setState({ pilot: nextProps.pilot }) : undefined;
  }

  render() {
    return (
      <form>
        <h3>What is your name, pilot?</h3>
        <input type='text' value={ this.props.value } onChange={ this._handleInput }/>
        <input type='submit' onClick={ this._handleSubmit }/>
        <p>{ this.state.pilot }</p>
      </form>
    )
  }
}
