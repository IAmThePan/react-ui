import React, { Component } from 'react';
import {
  Row,
  Column,
  Button,
} from 'react-foundation';

class Icons extends React.Component {
  render() {
    return (
      <div className="icons-tab">
        <Row>
          <Column>
            <h3>Icons</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <i className="fas fa-cloud"></i>&nbsp;
            <i className="far fa-envelope"></i>&nbsp;
            <i className="fas fa-pencil-alt"></i>&nbsp;
            <i className="fas fa-euro-sign"></i>&nbsp;
            <i className="fas fa-glass-martini"></i>&nbsp;
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Icons Inside of Buttons</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <Button>
              <i className="fas fa-power-off"></i> Default
            </Button>
            <Button color="secondary">
              <i className="fas fa-list-alt"></i> Secondary
            </Button>
            <Button color="success">
              <i className="far fa-check"></i> Success
            </Button>
            <Button color="alert">
              <i className="fas fa-ban"></i> Alert
            </Button>
            <Button color="warning">
              <i className="fas fa-exclamation-triangle"></i> Warning
            </Button>
          </Column>
        </Row>
      </div>
    );
  }
};

export default Icons;
