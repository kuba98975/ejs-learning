// nie instaluje body-parsera, zobaczymy czy damy radę na samym expresie
const express = require("express");

//jeżeli jednak nie ogarnę to tu wstawić linijkę z require body-parser

const app = express();

//robienie templejtów za pomocą EJS, app możemy używać dopiero po stworzeniu const app

app.set('view engine', 'ejs');

//żeby renderować templejty w ejs trzeba stworzyć folder views(z dokumentacji)

//zamiast res.send które może być użyte tylko raz możemy poszczególne fragmenty danych
//wysyłać za pomocą res.write a następnie, na końcu wpisać res.send()

//metodą na wysyłanie całych plików jest res.sendFile, __dirname do uzyskiwania ścieżki dostępu w której obecnie pracujemy



app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wendsday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
    console.log("Error: somehow current day is equal to: " + currentDay);
  }
  //o i tu renderujemy templejt do którego dokładamy zmienną day w zależności od tego, jaki mamy dzień tygodnia
  res.render("list", {kindOfDay: day});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
