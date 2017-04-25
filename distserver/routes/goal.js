'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _goal = require('../models/goal');

var _goal2 = _interopRequireDefault(_goal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var goalRoutes = _express2.default.Router();

goalRoutes.post('/goals', function (req, res, next) {
  var goal = new _goal2.default();
  goal.value = req.body.value;
  goal.lifeGoal = req.body.lifeGoal;
  goal.status = req.body.status;
  goal.owner = req.body.owner;
  goal.save(function (err, goal) {
    if (err) {
      next(err);
    } else {
      res.json(goal);
    }
  });
});

goalRoutes.get('/goals/:owner_id', function (req, res, next) {
  _goal2.default.find({ owner: req.params.owner_id }).populate('owner').exec(function (err, goals) {
    if (err) {
      next(err);
    } else {
      res.json(goals);
    }
  });
});

goalRoutes.put('/goals/:goal_id', function (req, res, next) {
  _goal2.default.findById({ _id: req.params.goal_id }, function (err, goal) {
    if (err) {
      next(err);
    } else {
      goal.status = req.body.status;
      goal.save(function (err, goal) {
        if (err) {
          next(err);
        } else {
          res.json(goal);
        }
      });
    }
  });
});

goalRoutes.delete('/goals/:goal_id', function (req, res, next) {
  _goal2.default.remove({ _id: req.params.goal_id }, function (err, goal) {
    if (err) {
      next(err);
    } else {
      res.json({ title: 'Congrats you completed that goal! its gone forever!' });
    }
  });
});

exports.default = goalRoutes;