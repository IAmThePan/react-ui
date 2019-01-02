import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

class Icons extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Icons</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fas fa-cloud"></i>&nbsp;
            <i className="far fa-envelope"></i>&nbsp;
            <i className="fas fa-pencil-alt"></i>&nbsp;
            <i className="fas fa-euro-sign"></i>&nbsp;
            <i className="fas fa-glass-martini"></i>&nbsp;
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Icons Inside of Buttons</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary">
              <i className="fas fa-power-off"></i> Primary
            </Button>
            <Button color="success">
              <i className="fas fa-check"></i> Success
            </Button>
            <Button color="info">
              <i className="far fa-list-alt"></i> Info
            </Button>
            <Button color="warning">
              <i className="fas fa-exclamation-triangle"></i> Warning
            </Button>
            <Button color="danger">
              <i className="fas fa-ban"></i> Danger
            </Button>
            <Button color="link">
              <i className="fas fa-tag"></i> Link
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Icons;
