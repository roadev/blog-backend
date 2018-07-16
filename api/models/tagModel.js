'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Blogdb';
console.log(MONGODB_URI);
const connection = mongoose.createConnection(MONGODB_URI);

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const tagSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the tag'
  },
  description: {
    type: String,
    Required: 'Kindly enter the description of the tag'
  },
  // tags: Array,
  date: {
    type: String,
    Required: 'Kindly enter the date of the tag'
  },
});


tagSchema.plugin(autoIncrement.plugin, 'Tags');

module.exports = mongoose.model('Tags', tagSchema);
