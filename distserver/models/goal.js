'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  value: String,
  lifeGoal: String,
  status: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

exports.default = mongoose.model('Goal', GoalSchema);