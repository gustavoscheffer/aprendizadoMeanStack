//express.js

var express =  require('express');
var load =  require('express-load');



module.exports = function() {

  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');


  //load of modules
  load('routes').then('infra').into(app);

  return app;
}
