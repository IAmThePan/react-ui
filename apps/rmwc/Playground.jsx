import React, { Component } from 'react';
import { Button, ButtonIcon } from '@rmwc/button';
import { LinearProgress } from '@rmwc/linear-progress';
import { CircularProgress } from '@rmwc/circular-progress';

class Playground extends React.Component {
  state = {
    circularStaticCompleted: 0,
    linearCompleted: 0,
    buffer: 10,
  };

  componentDidMount() {
    this.timer1 = setInterval(this.linearProgress, 500);
    this.timer2 = setInterval(this.circularStaticProgress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }

  circularStaticProgress = () => {
    const { circularStaticCompleted } = this.state;
    this.setState({ circularStaticCompleted: circularStaticCompleted >= 100 ? 0 : circularStaticCompleted + 10 });
  };

  linearProgress = () => {
    const { linearCompleted } = this.state;
    if (linearCompleted > 100) {
      this.setState({ linearCompleted: 0, buffer: 10 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({ linearCompleted: linearCompleted + diff, buffer: linearCompleted + diff + diff2 });
    }
  };

  render() {
    const { circularCompleted, circularStaticCompleted, linearCompleted, buffer } = this.state;
    return (
      <React.Fragment>
        <h3>Indeterminate Circular Loading Animation</h3>
        <div>
          <CircularProgress />
        </div>
        <h3>Static Circular Loading Animation</h3>
        <div>
          <CircularProgress progress={circularStaticCompleted} />
        </div>
        <h3>Indeterminate Linear Progress Bar</h3>
        <div>
          <LinearProgress determinate={false} />
        </div>
        <h3>Linear Progress Bar With Buffering</h3>
        <div>
          <LinearProgress progress={linearCompleted} buffer={buffer} />
        </div>
      </React.Fragment>
    );
  }
};

export default Playground;
