import React, { Component } from 'react';
import {
  ButtonToolbar,
  Button,
} from 'react-bootstrap';

class Buttons extends React.Component {

  render() {

    return (
      <React.Fragment>
        <h3>Button Colors</h3>
        <ButtonToolbar>
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link">Link</Button>
          <Button bsStyle="inverse">Inverse</Button>
        </ButtonToolbar>
        <h3>Button Sizes</h3>
        <ButtonToolbar>
          <Button bsSize="large">Large button</Button>
          <Button>Default button</Button>
          <Button bsSize="small">Small button</Button>
          <Button bsSize="xsmall">Extra Small button</Button>
        </ButtonToolbar>
        <h3>Disabled</h3>
        <ButtonToolbar>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
};

export default Buttons;
