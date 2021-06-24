var express = require('express');

var mongoose = require('mongoose');
var router = express.Router();

var Schema = mongoose.Schema;

var User = new Schema({
  username:
  {
    type: String,
    required: true,
    unique: true
  },
  password:
  {
    type: String,
    required: true
  },
  admin:
  {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', User);
