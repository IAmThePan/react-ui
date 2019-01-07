import React, { Component } from 'react';
import './styles.scss';
import Container from 'react-bootstrap-next/lib/Container';
import Row from 'react-bootstrap-next/lib/Row';
import Col from 'react-bootstrap-next/lib/Col';
import Tab from 'react-bootstrap-next/lib/Tab';
import Tabs from 'react-bootstrap-next/lib/Tabs';
import Buttons from './Buttons.jsx';
import Icons from './Icons.jsx';

class App extends React.Component {
  state = {
  };

  render() {

    return (
      <Container>
        <Row>
          <Col>
            <h1>React Bootstrap Next (Bootstrap Version 4)</h1>
            <h6>Bootstrap SCSS compiled and imported using JavaScript</h6>
            <Tabs id="tabs">
              <Tab eventKey={1} title="Buttons">
                <Buttons />
              </Tab>
              <Tab eventKey={2} title="Icons">
                <Icons />
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
