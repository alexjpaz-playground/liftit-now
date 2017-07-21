import React, { Component } from 'react';

import Child from './Child';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: 0
    };
  }

  getBar() {
    return this.state.bar;
  }

  increment() {
    let bar = this.state.bar;
    bar++;

    return new Promise((resolve) => {
      this.setState({
        bar: bar
      }, resolve);
    });
  }
  incrementAsync() {

  }
  render () {
    return (
      <Child foo={this.state.bar} />
    );
  }
}
