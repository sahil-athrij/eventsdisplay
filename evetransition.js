var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

// var branch = localStorage['branch'];
// localStorage.removeItem( 'branch' );
//
// Clear the localStorage




function showevents(branch) {
    branches = document.getElementById("ind-events");
    var database = firebase.database().ref().child('events/'+branch);

    database.once('value', snap => {
        snap.forEach(snapshot => {
            var div = document.createElement('div');
            div.id = snapshot.key;
            div.innerHTML = "<p>" + snapshot.key + "</p>";
            branches.appendChild(div);
        });
    });

}

