import Axios from "axios";

export function GetTrips(callback) {
  Axios.get("/api/Trips").then(response => {
    callback(response);
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
