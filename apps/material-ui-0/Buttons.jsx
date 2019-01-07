import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Buttons extends React.Component {

  render() {

    return (
      <React.Fragment>
        <h3>Button Colors</h3>
        <div>
          <Button variant="text">Text</Button>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
        </div>
        <h3>Button Sizes</h3>
        <div>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button variant="contained" color="primary" size="small">Small</Button>
          <Button variant="contained" color="primary" size="medium">Medium</Button>
          <Button variant="contained" color="primary" size="large">Large</Button>
        </div>
        <h3>Disabled</h3>
        <div>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button disableRipple>Ripple Disabled</Button>
          <Button variant="contained" color="primary">Default</Button>
          <Button variant="contained" color="primary" disabled>Disabled</Button>
          <Button variant="contained" color="primary" disableRipple>Ripple Disabled</Button>
        </div>
      </React.Fragment>
    );
  }
};

export default Buttons;
