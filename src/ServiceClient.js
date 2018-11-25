import Axios from "axios";
var localhost = "https://localhost:44316";

export function GetAllTrips(callback) {
   const accessToken = sessionStorage.getItem('access_token');
    console.log("Kävin serviceclientissa")
    console.log(accessToken);
    // const {getAccessToken} = this.props.auth;
    const headers = { 'Authorization': `Bearer ${accessToken}`};
    console.log(headers);
    Axios.get(localhost + "/api/Trips", {headers}).then(response => {
      
    callback(response.data);
  });
}

export function AddTrip(trip, callback) {

  const data = new FormData();

  data.append('action', 'POST');
  data.append('headline', trip.headline);
  data.append('description', trip.description);
  data.append('startDate', trip.startDate);
  data.append('endDate', trip.endDate);
  data.append('picture', new Blob([trip.photo], { type: 'image/jpeg' }));

  console.dir(trip);
  console.dir( data );
  Axios.post(localhost + "/api/Trips", data ).then(response => {
    //console.dir(response);
    callback(response);
  });
}

export function AddPitstop(pitstop, callback) {

  const data = new FormData();

  data.append('action', 'POST');
  data.append('title', pitstop.headline);
  data.append('note', pitstop.description);
  data.append('date', pitstop.date);
  data.append('picture', new Blob([pitstop.photo], { type: 'image/jpeg' }));

  console.dir(pitstop);
  console.dir( data );
  Axios.post(localhost + "/api/Pitstops", data ).then(response => {
    //console.dir(response);
    callback(response);
  });
}

export function GetTripPitstops(accessToken, callback) {
  var tripId = 1;
  // var accessToken = sessionStorage.getItem('access_token');
  console.log("Kävin serviceclientissa")
  console.log(accessToken);
  // const {getAccessToken} = this.props.auth;
  const headers = { 'Authorization': `Bearer ${accessToken}`};
  console.log(headers);
  Axios.get(localhost + "/api/Trips/" + tripId, {headers}).then(response => {
    
  callback(response.data);
});
}

export default function() {}
