import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

class Buttons extends React.Component {

  render() {

    return (
      <Container>
        <Row>
          <Col>
            <h3>Button Colors</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="info">Info</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button color="link">Link</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Button Colors Outlined</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button outline>Default</Button>
            <Button outline color="primary">Primary</Button>
            <Button outline color="success">Success</Button>
            <Button outline color="info">Info</Button>
            <Button outline color="warning">Warning</Button>
            <Button outline color="danger">Danger</Button>
            <Button outline color="link">Link</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Button Sizes</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" size="sm">Small button</Button>
            <Button color="primary" size="md">Default button</Button>
            <Button color="primary" size="lg">Large button</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Disabled</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Buttons;
