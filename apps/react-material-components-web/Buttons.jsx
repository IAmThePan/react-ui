import React, { Component } from 'react';
import Button from '@react-mdc/button';

class Buttons extends React.Component {

  render() {

    return (
      <div className="button-tab">
        <h3>Buttons</h3>
        <div>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button raised>Raised</Button>
          <Button raised dense>Dense</Button>
          <Button raised disabled>Disabled</Button>
        </div>
      </div>
    );
  }
};

export default Buttons;
