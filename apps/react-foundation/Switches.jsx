import React, { Component } from 'react';
import {
  Row,
  Column,
  Switch,
  InputTypes,
} from 'react-foundation';

class Switches extends React.Component {
  render() {
    return (
      <div className="switches-tab">
        <Row>
          <h3>Switches</h3>
        </Row>
        <Row>
          <Column>
            <Switch/>
            <Switch active={{ text: 'On' }} inactive={{ text: 'Off' }}/>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>Radio Switches</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <Switch input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }}/>
            <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
            <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
          </Column>
        </Row>
      </div>
    );
  }
};

export default Switches;
