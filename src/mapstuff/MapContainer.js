import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class MapContainer extends Component {
   
    constructor(props) {
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        location: ["{position: {lat: 60.1733244, lng: 24.9410248}, name: 1st marker}", "{position: {lat: 60.1733244, lng: 24.9410248}, name: 2nd marker}"],
      }
      // binding this to event-handler functions
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClick = this.onMapClick.bind(this);
    }

    onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
    onMapClick = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });

    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 7 }
        initialCenter = {{lat: 60.1733244, lng: 24.9410248} }
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{lat: 60.1733244, lng: 24.9410248} }
          name = { '1st marker' }
        />
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{lat: 59.1733244, lng: 23.9410248} }
          name = { '2nd marker' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }>
          <div>
                <h3>{this.state.activeMarker.name}</h3>
            </div>
          </InfoWindow>
      </Map>
    );
  }
}


const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )

export default GoogleApiWrapper({
    apiKey:"AIzaSyDIpDkSd2kXRCdGQguK1vbSSGKpv0MinM4",
    LoadingContainer: LoadingContainer
})(MapContainer)