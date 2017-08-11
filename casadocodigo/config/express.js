//express.js

var express =  require('express');
var load =  require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {

  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //setting bodyParser into application
  app.use(bodyParser.urlenconded(extended:true));

  //load of modules
  load('routes').then('infra').into(app);

  return app;
}
