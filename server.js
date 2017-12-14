const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Post = require('./api/models/postModel');
const bodyParser = require('body-parser');
const cors = require('cors');
const MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/Blogdb';

mongoose.Promise = global.Promise;
mongoose.connect(MONGOLAB_URI);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/postRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: `${req.originalUrl} not found`})
});

app.listen(port);

console.log('post list RESTful API server started on: ' + port);
