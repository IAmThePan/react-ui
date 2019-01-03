import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

// Only import one theme
// import "primereact/resources/themes/luna-amber/theme.css";
// import "primereact/resources/themes/luna-blue/theme.css";
// import "primereact/resources/themes/luna-green/theme.css";
// import "primereact/resources/themes/luna-pink/theme.css";
// import "primereact/resources/themes/nova-colored/theme.css";
// import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/themes/nova-light/theme.css";
// import "primereact/resources/themes/rhea/theme.css";

// Other PrimeReact Imports
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
    activeIndex: 0,
  };

  render() {

    return (
      <div className="p-grid p-justify-center">
        <div className="p-col-10">
          <h1>Prime React</h1>
          <h6>CSS imported using JavaScript</h6>
        </div>
        <div className="p-col-10">
          <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
            <TabPanel header="Buttons">
              <Buttons />
            </TabPanel>
            <TabPanel header="Icons">
              Tab 2 Content
            </TabPanel>
            <TabPanel header="Slider">
              Tab 3 Content
            </TabPanel>
          </TabView>
        </div>
      </div>
    );
  }
}

export default App;
