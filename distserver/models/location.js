'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  date: Date,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  title: String,
  weather: {
    temp: Number,
    windSpeed: Number,
    windDir: Number,
    conditions: String
  },
  notes: String,
  img: [{
    data: Buffer,
    contentType: String
  }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

exports.default = mongoose.model('Location', LocationSchema);