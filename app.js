document
.getElementById("image")
.onchange = function(e){

  let file = e.target.files[0];

  let imageURL =
  URL.createObjectURL(file);

  document
  .getElementById("preview")
  .src = imageURL;
}
let rooms = [

  {
    id: 1,
    name: "Hotel Blue Sky",
    location: "Indore",
    price: 1200
  },

  {
    id: 2,
    name: "Royal Palace",
    location: "Delhi",
    price: 1500
  }

];
body: JSON.stringify({
  roomname: roomname,
  price: price,
  location: location,
  image: image
})
let roomCard = `

<div class="room-card">

  <img src="${imageURL}" width="200">

  <h2>${roomname}</h2>

  <p>₹${price}</p>

  <p>${location}</p>

  <button>Book Now</button>

</div>

`;

document
.getElementById("roomList")
.innerHTML += roomCard;
// 🏠 ADD ROOM
function doPost(e) {

  var sheet = SpreadsheetApp.openById(
    "11Qwv-tG1ye_KIOnHzlJwswGKKU1gnpjQGK6qD163pQs"
  ).getSheets()[0];

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.roomname,
    data.price,
    data.location
  ]);

  return ContentService.createTextOutput("Success");
}{

  let name =
    document.getElementById("roomname").value;

  let location =
    document.getElementById("location").value;

  let price =
    document.getElementById("price").value;

  let newRoom = {
    id: rooms.length + 1,
    name,
    location,
    price
  };

  rooms.push(newRoom);

  showRooms(rooms);

  alert("Room Added Successfully!");
}

// 📍 SHOW ROOMS
function showRooms(data) {

  let box = document.getElementById("rooms");

  box.innerHTML = "";

  data.forEach(room => {

    box.innerHTML += `
      <div class="room">
        <h3>${room.name}</h3>

        <p>📍 ${room.location}</p>

        <p>💰 ₹${room.price}</p>

        <button onclick="bookRoom('${room.name}')">
          Book Now
        </button>
      </div>
    `;
  });
}

// 🔍 SEARCH SYSTEM
function searchRooms() {

  let value =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  let filtered = rooms.filter(room =>

    room.name.toLowerCase().includes(value)

    ||

    room.location.toLowerCase().includes(value)
  );

  showRooms(filtered);
}

// 📦 BOOK
function bookRoom(name) {
  alert("Booking Confirmed for " + name);
}

// 🚀 START
showRooms(rooms);
function requestBooking(roomName){

  let user =
    prompt("Enter Your Name");

  let phone =
    prompt("Enter Phone Number");

  alert(
    "Booking Request Sent!\n" +
    "Admin will contact you."
  );

}
let roomname =
document.getElementById("roomname").value;

let price =
document.getElementById("price").value;

let location =
document.getElementById("location").value;

let imageURL =
document.getElementById("preview").src;
let roomCard = `

<div class="room-card">

<img src="${imageURL}">

<h2>${roomname}</h2>

<p>₹${price}</p>

<p>${location}</p>

<button>Book Now</button>

</div>

`;

document
.getElementById("roomList")
.innerHTML += roomCard;