
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoute")(app);
require("./app/routing/apiRoute")(app);


app.post("/api/friend", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var closestFriend = req.body;
  console.log("CHAR NAME: ", closestFriend.name);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  closestFriend.routeName = closestFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(closestFriend);

  characters.push(closestFriend);

  res.json(closestFriend);
});



app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });