// Initialize Firebase
var config = {
    apiKey: "AIzaSyAl28frmquZuQDbo57y9HXgEMgZo7TqWxc",
    authDomain: "train-schedule-7a0eb.firebaseapp.com",
    databaseURL: "https://train-schedule-7a0eb.firebaseio.com",
    projectId: "train-schedule-7a0eb",
    storageBucket: "",
    messagingSenderId: "728087087004"
};
firebase.initializeApp(config);

var dataBase = firebase.dataBase().ref("train-schedule");

// variables
var div = $("<div>");
var p = $("<p>");
var tb = $("<tb>");

dataBase.on("child_added", snapshot => {
    const obj = snapshot.val();
    $("tbody").append('<tr><td>obj.name</td><td>obj.destination</td><td>obj.frequency</td><td>obj.arrival</td><td>obj.away</td></tr>')
})

$(document).ready(() => {
    $("#addTrain").click(event => {
        event.preventDefault();
        var m = moment();
        var name = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var frequency = $("#frequency").val().trim();
        var arrival = $("#arrival").val().trim();
        var away = $("#away").val().trim();

        $("#,#,#,#").val("");

        dataBase.push({
            name: name,
            destination: destination,
            time: time,
            frequency: frequency

        })
    });
});