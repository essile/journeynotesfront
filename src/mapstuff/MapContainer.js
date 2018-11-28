import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, onMarkerMounted, google} from 'google-maps-react';



class MapContainer extends Component {
   
    constructor(props) {
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        //location: ["{position: {lat: 60.1733244, lng: 24.9410248}, name: 1st marker}", "{position: {lat: 60.1733244, lng: 24.9410248}, name: 2nd marker}"],
        markerObjects: [],
      }
      // binding this to event-handler functions
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClick = this.onMapClick.bind(this);
      
    //   this.onMarkerMounted = element => {
    //     this.setState(prevState => ({
    //       markerObjects: [...prevState.markerObjects, element.marker]
    //   }))
    // };
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
    const trips = this.props.trips;
    console.log(trips);
    {trips.map(trip => {
      console.log("Position:" + trip.position + " name" + trip.headline);
    })}
    console.log(trips.position);
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }  
    return (
      <Map
        // item
        classname={"map"}
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 1 }
        initialCenter = {{lat: 60.1733244, lng: 24.9410248} }
        
        onReady={this.addMarker}
      >
      {trips.map(trip =>{ 
        let pos = trip.position
        let splitattu = pos.split(',')
        let first = splitattu[0].split(':')
        const lat = parseFloat(first[1]);
        let sec =  splitattu[1].split(':')
        const lng = parseFloat(sec[1]);
        let place = {lat,lng}
        return(
        <Marker  key={trip.id}
          // ref={this.onMarkerMounted}
          onClick = { this.onMarkerClick }
          title = { trip.headline }
          position = {place}
          name = { trip.headline }
      />)})}
        {/* <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{lat: 59.1733244, lng: 23.9410248} }
          name = { '2nd marker' }
        />*/}
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