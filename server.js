const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const db = require('./models');

let app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);

app.set('view engine', 'handlebars');

require('./routes/apiRoutes.js')(app);
require('./routes/publicRoutes.js')(app);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI).then(() =>{
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
});

module.exports =  app;
