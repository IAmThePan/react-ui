import React, { Component } from 'react';
import Button from '@material/react-button';

class Buttons extends React.Component {

  render() {

    return (
      <div className="button-tab">
        <h3>Buttons</h3>
        <div>
          <Button>Default</Button>
          <Button raised>raised</Button>
          <Button unelevated>unelevated</Button>
          <Button outlined>outlined</Button>
          <Button dense>dense</Button>
          <Button disabled>disabled</Button>
        </div>
      </div>
    );
  }
};

export default Buttons;
