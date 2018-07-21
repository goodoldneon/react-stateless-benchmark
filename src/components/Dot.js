import React from 'react';

const DotStateless = () => {
  return <span>.</span>;
};

class DotPure extends React.PureComponent {
  render() {
    return <span>.</span>;
  }
}

class DotStateful extends React.Component {
  render() {
    return <span>.</span>;
  }
}

export class ManyStatelessMount extends React.Component {
  render() {
    const { count } = this.props;

    const dots = Array(count)
      .fill()
      .map(() => <DotStateless />);

    return React.createElement('div', {}, ...dots);
  }
}

export class ManyStatelessCall extends React.Component {
  render() {
    const { count } = this.props;

    const dots = Array(count)
      .fill()
      .map(() => DotStateless());

    return React.createElement('div', {}, ...dots);
  }
}

export class ManyPure extends React.Component {
  render() {
    const { count } = this.props;

    const dots = Array(count)
      .fill()
      .map(() => <DotPure />);

    return React.createElement('div', {}, ...dots);
  }
}

export class ManyStateful extends React.Component {
  render() {
    const { count } = this.props;

    const dots = Array(count)
      .fill()
      .map(() => <DotStateful />);

    return React.createElement('div', {}, ...dots);
  }
}
