// nie instaluje body-parsera, zobaczymy czy damy radę na samym expresie
const express = require("express");

//jeżeli jednak nie ogarnę to tu wstawić linijkę z require body-parser

const app = express();

//robienie templejtów za pomocą EJS, app możemy używać dopiero po stworzeniu const app

//pusta zmienna dla renderowania nowych punktów listy
var items = ["Buy Food", "Cook Food", "Eat Food"];
//pusta lista dla podstrony work
var workItems =[];

app.set('view engine', 'ejs');

app.use(express.urlencoded());

//żeby renderować templejty w ejs trzeba stworzyć folder views(z dokumentacji)

//zamiast res.send które może być użyte tylko raz możemy poszczególne fragmenty danych
//wysyłać za pomocą res.write a następnie, na końcu wpisać res.send()

//metodą na wysyłanie całych plików jest res.sendFile, __dirname do uzyskiwania ścieżki dostępu w której obecnie pracujemy

//definiujemy folder z plikami publicznymi by zaimplementować css
app.use(express.static("public"));


app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

//robimy opcje do toLocaleDateString metody, by przedtawić datę w porządanym formacie
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

//i tu metoda do przedstawiania daty w określonym formacie
var day = today.toLocaleDateString("en-US", options);

//o i tu renderujemy templejt do którego dokładamy zmienną day w zależności od tego, jaki mamy dzień tygodnia
//przekazujemy też zmienną do renderowania kolejnych pozycji listy
  res.render("list", {listTitle: day, newListItems: items});
});

//zbieramy kolejną pozycję za pomocą metody post odwołującej sie do formsa w htmlu
app.post("/", function(req, res) {
  const item = req.body.next_item;
  console.log(req.body)
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
  items.push(item);
  res.redirect("/");
}
});
//sprawdzamy czy value które idzie od buttona czyli tytuł listy jest właśnie work czy coś innego i jeżeli work to dodajemy nowe pozycje listy do nowej listy workList


//get dla podstrony work
app.get("/work", function(req, res) {
  const title = "Work List";
  res.render("list", {listTitle: title, newListItems: workItems});
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
