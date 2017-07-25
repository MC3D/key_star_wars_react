import React, {Component} from 'react';
import '../styles/App.css';

import Jumbotron from './jumbotron';
import Form from './form';
import VehicleCard from './vehiclecard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(value) {
    this.setState({ value });
  }

  _handleSubmit(value) {
    console.log('value', value);
    this.setState({ pilot: value });
    //console.log('here', this.state.pilot);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then((json) => {
      this.setState({ vehicles: json.results });
    });
  }

  render() {
    let vehicles = this.state.vehicles.map((vehicle) => {
      return <VehicleCard key={ vehicle.name } vehicle={ vehicle } />
    });

    return (
      <div className="App container-fluid">
        <Jumbotron />
        <Form value={ this.state.value } pilot={ this.state.pilot } handleInput={ this._handleInput } handleSubmit={ this._handleSubmit }/>
        <div className='row'>{ vehicles }</div>
      </div>
    );
  }
}

export default App;
