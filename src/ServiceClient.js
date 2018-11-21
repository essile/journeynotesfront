import Axios from "axios";
var localhost= "https://localhost:44316";

export function GetAllTrips(callback) {
    var personID = 70;
    console.log("Kävin serviceclientissa")
    Axios.get(localhost + "/api/Trips?personID=" + personID).then(response => {
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
    //callback(response);
  });
}

export default function() {}
