import React from 'react';
import SeasonDisplay from './season'

import './App.css';

const ShowGps = (props) => {
  
    if (props.errorMessage && !props.lat) {
      return (
        <div>
        Error: { props.errorMessage }
        </div>
      )
    }

  if (!props.errorMessage && props.lat) {
    return (
      <p>
      latitude: { props.lat } / longitude: { props.lon }
      </p>
    )
  }

  return <div>Loading</div>
  
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}    
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState( { lat: position.coords.latitude, lon: position.coords.longitude })
      },
      err => {
        this.setState( { errorMessage: err.message })
      } )
  }

  componentDidUpdate() {
    console.log('console updated');
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <ShowGps lat={this.state.lat} lon={this.state.lat} errorMessage={this.state.errorMessage}/>
            <SeasonDisplay lat={this.state.lat} />
          </header>
        </div>
      );
  } 
}

export default App;
