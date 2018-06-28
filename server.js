const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Post = require('./api/models/postModel');
const Tag = require('./api/models/tagModel');
const bodyParser = require('body-parser');
const cors = require('cors');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Blogdb';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const routes = require('./api/routes');
routes(app);

app.use((req, res) => {
  res.status(404).send({url: `${req.originalUrl} not found`})
});

app.listen(port);

console.log('post list RESTful API server started on: ' + port);
