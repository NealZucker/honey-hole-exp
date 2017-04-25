'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _location = require('../models/location');

var _location2 = _interopRequireDefault(_location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locationRoutes = _express2.default.Router();

locationRoutes.post('/locations', function (req, res, next) {
  var location = new _location2.default();
  location.date = req.body.date;
  location.coordinates = req.body.coordinates;
  location.owner = req.body.owner;
  location.save(function (err, location) {
    if (err) {
      next(err);
    } else {
      res.json(location);
    }
  });
});

locationRoutes.get('/locations/:owner_id', function (req, res, next) {
  _location2.default.find({ owner: req.params.owner_id }).populate('owner').exec(function (err, locations) {
    if (err) {
      next(err);
    } else {
      res.json(locations);
    }
  });
});

locationRoutes.delete('/locations/:location_id', function (req, res, next) {
  location.remove({ _id: req.params.location_id }, function (err, location) {
    if (err) {
      next(err);
    } else {
      res.json({ title: 'Location was successfully deleted!' });
    }
  });
});

exports.default = locationRoutes;