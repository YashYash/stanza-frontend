var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var Account = require('../models/account');
var async = require('async');
var ff = require('ff');

router.get('/project', function(req, res) {
  res.render('project');
});

router.get('/assignments', function(req, res) {
  res.render('assignments');
});


// Register

module.exports = router;
