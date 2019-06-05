
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



require("./app/routing/htmlRoute")(app);
require("./app/routing/apiRoute")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });