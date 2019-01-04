import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

class Playground extends React.Component {
  state = {
    circularCompleted: 0,
    circularStaticCompleted: 0,
    linearCompleted: 0,
    buffer: 10,
  };

  componentDidMount() {
    this.timer1 = setInterval(this.linearProgress, 500);
    this.timer2 = setInterval(this.circularProgress, 50);
    this.timer3 = setInterval(this.circularStaticProgress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
  }

  circularProgress = () => {
    const { circularCompleted } = this.state;
    this.setState({ circularCompleted: circularCompleted >= 100 ? 0 : circularCompleted + 1 });
  };

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
          <CircularProgress />&nbsp;&nbsp;
          <CircularProgress color="secondary"/>
        </div>
        <h3>Circular Loading Animation</h3>
        <div>
          <CircularProgress variant="determinate" value={circularCompleted} />&nbsp;&nbsp;
          <CircularProgress variant="determinate" value={circularCompleted} color="secondary"/>
        </div>
        <h3>Static Circular Loading Animation</h3>
        <div>
          <CircularProgress variant="static" value={circularStaticCompleted} />&nbsp;&nbsp;
          <CircularProgress variant="static" value={circularStaticCompleted} color="secondary"/>
        </div>
        <h3>Indeterminate Linear Progress Bar</h3>
        <div>
          <LinearProgress />
          <br />
          <LinearProgress color="secondary"/>
        </div>
        <h3>Linear Progress Bar With Buffering</h3>
        <div>
          <LinearProgress variant="buffer" value={linearCompleted} valueBuffer={buffer} />
          <br />
          <LinearProgress variant="buffer" value={linearCompleted} valueBuffer={buffer} color="secondary" />
        </div>
      </React.Fragment>
    );
  }
};

export default Playground;
