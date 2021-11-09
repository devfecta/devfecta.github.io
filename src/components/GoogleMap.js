import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const containerStyle = {
    height: '300px',
    position: 'unset'
  };
  const mapStyle = {
    height: '300px',
    position: 'unset'
  };

class GoogleMap extends Component {

    state = {
        showingInfoWindow: false, 
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    

    render() {
      return (
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyle}
            containerStyle={containerStyle}
            className="mapStyle"
            initialCenter={
                {
                    lat: 43.0476791,
                    lng: -89.3417825
                }
            }
        >
            <Marker
            onClick={this.onMarkerClick}
            name={'DevFecta, LLC'}
            />
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            >
            <div>
                <h5>{this.state.selectedPlace.name}</h5>
            </div>
            </InfoWindow>
        </Map>
      );
    }
  }
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
})(GoogleMap);