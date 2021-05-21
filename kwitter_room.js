user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDDhZh-LDy2h7uvCJWy1bOeI6WfmWdk4XI",
      authDomain: "kwitter-app-ae151.firebaseapp.com",
      databaseURL: "https://kwitter-app-ae151-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-ae151",
      storageBucket: "kwitter-app-ae151.appspot.com",
      messagingSenderId: "531756184730",
      appId: "1:531756184730:web:feda1812ae6f1550c91b23",
      measurementId: "G-EQWHGTYDCN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot) 
       {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code;

      console.log("room_name" + Room_names);
      row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}


getData();
function add_room()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name"
       });  

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location="index.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}
