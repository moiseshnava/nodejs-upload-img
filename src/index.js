const express = require("express");
const path = require("path");


// initializations
const app = express();

// settings
app.set('port', 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");//no hace falta usar require


// routes
app.get("/", (req, res) => {
   res.render("index");
});

app.post("/upload", (req, res) => {
   res.send("uploaded");
});
// Start the servers
app.listen(app.get('port'), () => {
   console.log(`Server on port ${app.get('port')}`);
});