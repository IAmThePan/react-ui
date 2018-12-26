import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
} from 'react-bootstrap-next';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
  };

  render() {

    return (
      <Container>
        <Row>
          <Col>
            <h1>React Bootstrap Next (Bootstrap Version 4)</h1>
            <Tabs id="tabs">
              <Tab eventKey={1} title="Buttons">
                <Buttons />
              </Tab>
              <Tab eventKey={2} title="Icons">
                Tab 2 Content
              </Tab>
              <Tab eventKey={3} title="Switches">
                Tab 3 Content
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
