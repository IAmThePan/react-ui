import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class Switches extends React.Component {

  render() {

    return (
      <Grid>
        <Row>
          <Col>
            <h3>Switches</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* I realized later that this styling is only available with mdboostrap */}
            <label className="bs-switch">
              <input type="checkbox"/>
              <span className="slider round" />
            </label>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Switches;
