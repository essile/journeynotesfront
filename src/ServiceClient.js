import Axios from "axios";
var localhost = "https://localhost:44316";


export function GetAllTrips(callback) {
  const accessToken = sessionStorage.getItem("access_token");

  console.log("Kävin serviceclientissa");
  console.log(accessToken);
  // const {getAccessToken} = this.props.auth;
  const headers = { Authorization: `Bearer ${accessToken}` };
  console.log(headers);
  Axios.get(localhost + "/api/Trips", { headers }).then(response => {
    callback(response.data);
  });
}

export function AddTrip(trip, callback) {
  const accessToken = sessionStorage.getItem("access_token");
  const data = new FormData();
  const headers = { Authorization: `Bearer ${accessToken}` };
  data.append("action", "POST");
  data.append("headline", trip.headline);
  data.append("description", trip.description);
  data.append("startDate", trip.startDate);
  data.append("endDate", trip.endDate);
  data.append("position", trip.position)
  data.append("picture", new Blob([trip.photo], { type: "image/jpeg" }));
  
  console.log(accessToken);
  console.dir(trip);
  console.dir(data);
  Axios.post(localhost + "/api/Trips", data, { headers }).then(response => {
    //console.dir(response);
    callback(response);
  });
}

export function AddPitstop(pitstop, callback) {
  const accessToken = sessionStorage.getItem("access_token");

  const data = new FormData();
  const headers = { Authorization: `Bearer ${accessToken}` };

  data.append("action", "POST");
  data.append("title", pitstop.title);
  data.append("note", pitstop.note);
  data.append("date", pitstop.date);
  data.append("picture", new Blob([pitstop.photo], { type: "image/jpeg" }));
  data.append("pitstopPosition", pitstop.pitstopPosition)
  console.log(accessToken);
  console.dir(pitstop);
  console.dir(data);
  Axios.post(localhost + "/api/Pitstops/" + pitstop.tripId, data, { headers }).then(response => {
    //console.dir(response);
    callback(response);
  });
}

export function GetTripWithPitstops(tripId, callback) {
  //var tripId = 1;
  const accessToken = sessionStorage.getItem("access_token");
  console.log("Kävin serviceclientissa");
  console.log(accessToken);
  
  // const {getAccessToken} = this.props.auth;
  const headers = { 'Authorization': `Bearer ${accessToken}`};
  console.log(headers);
  Axios.get(localhost + "/api/Trips/" + tripId, { headers }).then(response => {
    callback(response.data);
  });
}

export function DeleteTrip(tripId) {
  const accessToken = sessionStorage.getItem("access_token");
  const headers = { 'Authorization': `Bearer ${accessToken}`};
  return Axios.delete(localhost + "/api/Trips/"+ tripId, { headers })
  .then(response=>{
      console.log("matka poistettu");
      console.dir(response);
  });
}

export function DeletePitstop(tripId, pitstopId) {
  const accessToken = sessionStorage.getItem("access_token");
  const headers = { 'Authorization': `Bearer ${accessToken}`};
  console.log("delete-funktiosta:" + accessToken);
  return Axios.delete(localhost + '/api/Trips/'+ tripId + "/" + pitstopId, {headers})
  .then(response=>{
      console.log("pitstop poistettu");
      console.dir(response);
  });
}

export function EditTrip(trip) {
  const accessToken = sessionStorage.getItem("access_token");
  const headers = { 'Authorization': `Bearer ${accessToken}`};

  console.log("EditTrip, trip", trip);

  // const data = new FormData();
  // data.append("action", "PUT");
  // data.append("headline", trip.headline);
  // data.append("description", trip.description);
  // data.append("startDate", trip.startDate);
  // data.append("endDate", trip.endDate);
  // data.append("MainPhotoUrl", trip.MainPhotoUrl);
  // data.append("MainPhotoSmallUrl", trip.MainPhotoSmallUrl);

  console.log("edittrip-funktiosta:" + accessToken);
  return Axios.put(localhost + '/api/Trips/'+ trip.tripId, trip, {headers})
  .then(response=> {
      console.log("trip edited");
      console.dir(response);
  });
}

export default function() {}
