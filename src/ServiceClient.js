import Axios from "axios";
var localhost= "https://localhost:44316";

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
  var addedTrip = {
    headline: trip.headline,
    description: trip.description
  };
  console.log(addedTrip);
  Axios.post("/api/Trips", trip).then(response => {
    console.dir(response);
    callback(response);
  });
}

export default function() {}
