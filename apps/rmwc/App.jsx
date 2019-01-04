import React, { Component } from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { TabBar, Tab } from '@rmwc/tabs';
import Buttons from './Buttons.jsx';
import Playground from './Playground.jsx';

class App extends React.Component {
  state = {
    activeTab: 0,
  };

  render() {
    const { activeTab } = this.state;

    return (
      <Grid>
        <GridCell span="12">
          <h1>RMWC</h1>
        </GridCell>
        <GridCell span="12">
          <TabBar activeTabIndex={activeTab} onActivate={e => this.setState({activeTab: e.detail.index})}>
            <Tab>Buttons</Tab>
            <Tab>Icons</Tab>
            <Tab>Loading Animations</Tab>
          </TabBar>
        </GridCell>
        <GridCell span="12">
          {activeTab === 0 && (<Buttons />)}
          {activeTab === 1 && (<div>Tab 2 Content</div>)}
          {activeTab === 2 && (<div><Playground /></div>)}
        </GridCell>
      </Grid>
    );
  }
}

export default App;
