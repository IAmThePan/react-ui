import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

class Buttons extends React.Component {

  render() {

    return (
      <Grid>
        <Row>
          <Col>
            <h3>Button Colors</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonToolbar>
              <Button>Default</Button>
              <Button bsStyle="primary">Primary</Button>
              <Button bsStyle="success">Success</Button>
              <Button bsStyle="info">Info</Button>
              <Button bsStyle="warning">Warning</Button>
              <Button bsStyle="danger">Danger</Button>
              <Button bsStyle="link">Link</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Button Sizes</h3>
            <ButtonToolbar>
              <Button bsSize="large">Large button</Button>
              <Button>Default button</Button>
              <Button bsSize="small">Small button</Button>
              <Button bsSize="xsmall">Extra Small button</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Disabled</h3>
            <ButtonToolbar>
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Buttons;
