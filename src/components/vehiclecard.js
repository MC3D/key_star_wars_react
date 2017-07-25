import React, { Component } from 'react';

export default class VehicleCard extends Component {
  constructor() {
    super();
  }

  render() {
    let vehicle = this.props.vehicle;
    return (
      <div className="col-sm-4">
        <div className='card'>
          <div className='card-block'>
            <h3 class="card-title">Vehicle: {vehicle.name}</h3>
          </div>
        </div>
      </div>
    )
  }
}
