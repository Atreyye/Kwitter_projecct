const firebaseConfig = {
    apiKey: "AIzaSyAbFObWKrACLhrM2jZYFW6jcmT0LfPtGyo",
    authDomain: "kwitter-project-72178.firebaseapp.com",
    projectId: "kwitter-project-72178",
    storageBucket: "kwitter-project-72178.appspot.com",
    messagingSenderId: "708451037137",
    appId: "1:708451037137:web:e249cccd8fba07c0f1faf0",
    measurementId: "G-YDK8M5XL10"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
      });
  });
}
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    })
  }
  function logout() {
    localStorage.removeItem("user_name");
    window.location = "kwitter.html";
  }