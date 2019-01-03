import React, { Component } from 'react';
import { Button } from 'primereact/button';

class Buttons extends React.Component {

  render() {

    return (
      <div className="button-tab">
        <h3>Buttons</h3>
        <div>
          <div>Button Severities</div>
          <Button label="Primary" />
          <Button label="Secondary" className="p-button-secondary" />
          <Button label="Success" className="p-button-success" />
          <Button label="Info" className="p-button-info" />
          <Button label="Warning" className="p-button-warning" />
          <Button label="Danger" className="p-button-danger" />
        </div>
        <div>
          <div>Raised</div>
          <Button label="Primary" className="p-button-raised" />
          <Button label="Secondary" className="p-button-raised p-button-secondary" />
          <Button label="Success" className="p-button-raised p-button-success" />
          <Button label="Info" className="p-button-raised p-button-info" />
          <Button label="Warning" className="p-button-raised p-button-warning" />
          <Button label="Danger" className="p-button-raised p-button-danger" />
        </div>
        <div>
          <div>Rounded</div>
          <Button label="Primary" className="p-button-rounded" />
          <Button label="Secondary" className="p-button-rounded p-button-secondary" />
          <Button label="Success" className="p-button-rounded p-button-success" />
          <Button label="Info" className="p-button-rounded p-button-info" />
          <Button label="Warning" className="p-button-rounded p-button-warning" />
          <Button label="Danger" className="p-button-rounded p-button-danger" />
        </div>
        <div>
          <div>Raised and Rounded</div>
          <Button label="Primary" className="p-button-rounded p-button-raised" />
          <Button label="Secondary" className="p-button-rounded p-button-raised p-button-secondary" />
          <Button label="Success" className="p-button-rounded p-button-raised p-button-success" />
          <Button label="Info" className="p-button-rounded p-button-raised p-button-info" />
          <Button label="Warning" className="p-button-rounded p-button-raised p-button-warning" />
          <Button label="Danger" className="p-button-rounded p-button-raised p-button-danger" />
        </div>
      </div>
    );
  }
};

export default Buttons;
