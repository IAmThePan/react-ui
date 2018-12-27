import React, { Component } from 'react';
import {
  Row,
  Column,
  Button,
} from 'react-foundation';

class Buttons extends React.Component {

  render() {

    return (
      <div className="button-tab">
        <Row>
          <Column>
            <h3>Button Colors</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button>Default</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="alert">Alert</Button>
            <Button color="warning">Warning</Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Button Colors Hollow</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button isHollow color="primary">Primary</Button>
            <Button isHollow color="secondary">Secondary</Button>
            <Button isHollow color="success">Success</Button>
            <Button isHollow color="alert">Alert</Button>
            <Button isHollow color="warning">Warning</Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Button Sizes</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button color="primary" size="tiny">Tiny button</Button>
            <Button color="primary" size="small">Small button</Button>
            <Button color="primary">Default button</Button>
            <Button color="primary" size="large">Large button</Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Disabled</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button>Default</Button>
            <Button isDisabled>Disabled</Button>
          </Column>
        </Row>
      </div>
    );
  }
};

export default Buttons;
