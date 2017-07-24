import React, { Component } from 'react';

export default class VehicleCard extends Component {
  constructor() {
    super();
  }

  render() {
    let vehicle = this.props.vehicle;
    return (
      <div>{ vehicle.name }</div>
    )
  }
}
