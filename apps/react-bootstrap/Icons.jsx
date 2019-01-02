import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Glyphicon,
} from 'react-bootstrap';

class Icons extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h3>Icons</h3>
          </Col>
        </Row>
        <Row>
          <i className="fas fa-cloud"></i>&nbsp;
          <i className="far fa-envelope"></i>&nbsp;
          <i className="fas fa-pencil-alt"></i>&nbsp;
          <i className="fas fa-euro-sign"></i>&nbsp;
          <i className="fas fa-glass-martini"></i>&nbsp;
        </Row>
        <Row>
          <Col>
            <h3>Icons Inside of Buttons</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonToolbar>
              <Button bsStyle="primary">
                <i className="fas fa-power-off"></i> Primary
              </Button>
              <Button bsStyle="success">
                <i className="fas fa-check"></i> Success
              </Button>
              <Button bsStyle="info">
                <i className="far fa-list-alt"></i> Info
              </Button>
              <Button bsStyle="warning">
                <i className="fas fa-exclamation-triangle"></i> Warning
              </Button>
              <Button bsStyle="danger">
                <i className="fas fa-ban"></i> Danger
              </Button>
              <Button bsStyle="link">
                <i className="fas fa-tag"></i> Link
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Icons;
