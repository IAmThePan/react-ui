import React, { Component } from 'react';
import {
  Row,
  Column,
  Tab,
  Tabs,
  TabItem,
  TabsContent,
  TabPanel,
} from 'react-foundation';
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
      <div>
        <Row>
          <Column>
            <h1>React Foundation (Foundation Version 6)</h1>
          </Column>
        </Row>
        <Row>
          <Column>
            <Tabs id="foundation-tabs" data-tabs className="bloink">
              <TabItem
                isActive={activeTab === "1"}
                onClick={() => { this._toggleTab('1'); }}
              >
                <a href="#buttons">Buttons</a>
              </TabItem>
              <TabItem
                isActive={activeTab === "2"}
                onClick={() => { this._toggleTab('2'); }}
              >
                <a href="#icons">Icons</a>
              </TabItem>
              <TabItem
                isActive={activeTab === "3"}
                onClick={() => { this._toggleTab('3'); }}
              >
                <a href="#switches">Switches</a>
              </TabItem>
            </Tabs>
            {activeTab === '1' && (<Buttons />)}
            {activeTab === '2' && (<Icons />)}
            {activeTab === '3' && (<div>Tab 3 Content</div>)}
          </Column>
        </Row>
      </div>
    );
  }
}


// <TabsContent data-tabs-content="foundation-tabs-content">
//   <TabPanel id="buttons">bloink</TabPanel>
//   <TabPanel id="icons">fallon</TabPanel>
//   <TabPanel id="switches">gerald</TabPanel>
// </TabsContent>

// <ButtonGroup>
//   <Button
//     color="primary"
//     isHollow={activeTab !== '1'}
//     onClick={() => { this._toggleTab('1'); }}
//     >
//     Buttons
//   </Button>
//   <Button
//     color="primary"
//     isHollow={activeTab !== '2'}
//     onClick={() => { this._toggleTab('2'); }}
//     >
//     Icons
//   </Button>
//   <Button
//     color="primary"
//     isHollow={activeTab !== '3'}
//     onClick={() => { this._toggleTab('3'); }}
//     >
//     Switches
//   </Button>
// </ButtonGroup>

export default App;
