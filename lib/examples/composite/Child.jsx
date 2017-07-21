import React, { Component } from 'react';

export default class Child extends Component {
  render () {
      return <p>Child foo={this.props.foo}</p>;
  }
}
