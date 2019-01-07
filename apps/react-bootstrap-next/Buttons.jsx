import React, { Component } from 'react';
import Container from 'react-bootstrap-next/lib/Container';
import Row from 'react-bootstrap-next/lib/Row';
import Col from 'react-bootstrap-next/lib/Col';
import Button from 'react-bootstrap-next/lib/Button';
import ButtonToolbar from 'react-bootstrap-next/lib/ButtonToolbar';

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
            <ButtonToolbar>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="info">Info</Button>
              <Button variant="light">Light</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Button Colors (Outlined)</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonToolbar>
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-secondary">Secondary</Button>
              <Button variant="outline-success">Success</Button>
              <Button variant="outline-warning">Warning</Button>
              <Button variant="outline-danger">Danger</Button>
              <Button variant="outline-info">Info</Button>
              <Button variant="outline-light">Light</Button>
              <Button variant="outline-dark">Dark</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Button Sizes</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button size="lg">Large button</Button>
              <Button>Default button</Button>
              <Button size="sm">Small button</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Disabled</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonToolbar>
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Buttons;
