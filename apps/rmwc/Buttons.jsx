import React, { Component } from 'react';
import { Button, ButtonIcon } from '@rmwc/button';

class Buttons extends React.Component {

  render() {

    return (
      <div className="button-tab">
        <h3>Buttons</h3>
        <div>
          <Button>Default</Button>
          <Button raised>Raised</Button>
          <Button raised dense>Raised Dense</Button>
          <Button unelevated>Unelevated</Button>
          <Button outlined>Outlined</Button>
          <Button theme="secondary-bg on-secondary">With Theme</Button>
        </div>
      </div>
    );
  }
};

export default Buttons;
