var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Heroku CICD Test - AIT!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

//Mongoose Settings
//-----------------------------------------
// const {User} = require("./models");
// const mongoose = require("mongoose");

// console.log("mongoose stuff intialized");

// app.use((req, res, next) => {
//  console.log("use for mongoose callback");
//  if (mongoose.connection.readyState) {
//    console.log("if (mongoose.connection.readyState)");
//    next();
//  } else {
//    console.log("else (mongoose.connection.readyState)");
//    require("./mongo")().then(() => next());
//    console.log("else (mongoose.connection.readyState)");
//  }
//});*//

