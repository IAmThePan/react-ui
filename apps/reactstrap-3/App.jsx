import React, { Component } from 'react';
import './styles.scss';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import Buttons from './Buttons.jsx';
import Icons from './Icons.jsx';

class App extends React.Component {
  state = {
    activeTab: '1',
  };

  _toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <h1>ReactStrap (Bootstrap Version 4)</h1>
            <h6>Bootstrap SCSS compiled and imported using JavaScript</h6>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === '1' ? "active" : ""}
                  onClick={() => { this._toggleTab('1'); }}
                  >
                  Buttons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? "active" : ""}
                  onClick={() => { this._toggleTab('2'); }}
                  >
                  Icons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? "active" : ""}
                  onClick={() => { this._toggleTab('3'); }}
                  >
                  Switches
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Buttons />
              </TabPane>
              <TabPane tabId="2">
                <Icons />
              </TabPane>
              <TabPane tabId="3">
                <div>Tab 3 Content</div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
