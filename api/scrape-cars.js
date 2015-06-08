'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var Ad = require('../models/ads');
var ff = require('ff');

router.get('/cars/:pages', function(req, res) {
  var sendCars = [];
  async.waterfall([
    function(callback) {
      Ad.remove(function(err) {
        if (!err) {
          console.log("#### Removed all ads");
          socket.emit('progress', 5);
          callback(null);
        } else {
          callback(err);
        }
      });
    },
    function(callback) {
      var numberOfPagesToScrape = req.params.pages;
      var urls = [];
      urls = [{
        url: 'https://www.kijiji.ca/b-cars-trucks/ontario/c174l9004',
        page: 1,
      }];
      for (var i = 2; i <= numberOfPagesToScrape; i++) {
        urls.push({
          url: 'https://www.kijiji.ca/b-cars-trucks/ontario/page-' + i + '/c174l9004',
          page: i,
        });
      }
      socket.emit('progress', 15);
      callback(null, urls);
    },
    function(urls, callback) {
      var levelOneAds = [];
      async.eachSeries(urls, function(url, cb) {
        var f = ff(function() {
          request(url.url, f.slotMulti(2));
        }, function(response, html) {
          var $ = cheerio.load(html);
          var ads = $('.container-results').children('table');
          ads.each(function(i, elem) {
            levelOneAds.push($(this));
          });
          cb();
        }).onError(function(err) {
          callback(err);
        });
      }, function() {
      	socket.emit('progress', 35);
        callback(null, levelOneAds);
      });
    },
    function(ads, callback) {
      var adUrls = [];
      async.eachSeries(ads, function(ad, cb) {
        var url = ad.children('tr').children('td.description').children('a.title').attr('href');
        adUrls.push('http://www.kijiji.ca' + url);
        cb();
      }, function() {
        console.log('#### Finished scarping page ');
        socket.emit('progress', 65);
        callback(null, adUrls);
      });
    },
    function(adUrls, callback) {
      var ads = [];
      var ad = {};
      socket.emit('progress', 75);
      async.eachSeries(adUrls, function(url, next) {
        if (url.indexOf('?src=topAdSearch') > -1) {
          var url = url.substring(0, url.length - 16);
        }
        ad = {};
        var g = ff(function() {
          request(url, g.slotMulti(2));
        }, function(response, html) {
          var $ = cheerio.load(html);
          var allTrs = [];
          ad = {
            "title": $('h1').text(),
            "price": '',
            "seller": '',
            "make": '',
            "model": '',
            "address": '',
            "kilometers": '',
            "vehicletype": '',
            "transmission": '',
            "listed": '',
            "color": '',
            "drive": '',
            "fuel": '',
            "description": $('#UserContent').find('tr').text().trim(),
            "images": []
          }
          var trs = $('table.ad-attributes').children('tr');
          trs.each(function(i, elem) {
            allTrs.push($(this));
          });
          var images = $('ul#ShownImage').children('li');
          images.each(function(i, elem) {
            var image = $(this).children('img').attr('src');
            ad.images.push(image);
          });
          var i = ff(function() {
            async.eachSeries(allTrs, function(tr, nextTr) {
              var heading = tr.children('th').text().trim();
              switch (heading) {
                case 'Date Listed':
                  ad.listed = tr.children('td').text().trim();
                  break;
                case 'Price':
                  ad.price = tr.children('td').text().trim();
                  break;
                case 'Address':
                  ad.address = tr.children('td').text().replace('View map', '').trim();
                  break;
                case 'Make':
                  ad.make = tr.children('td').children('a').text().trim();
                  break;
                case 'Model':
                  ad.model = tr.children('td').children('a').text().trim();
                  break;
                case 'Kilometers':
                  ad.kilometers = tr.children('td').text().trim();
                  break;
                case 'Body Type':
                  ad.vehicletype = tr.children('td').text().trim();
                  break;
                case 'Transmission':
                  ad.transmission = tr.children('td').text().trim();
                  break;
                case 'Colour':
                  ad.color = tr.children('td').text().trim();
                  break;
                case 'Drivetrain':
                  ad.drive = tr.children('td').text().trim();
                  break;
                case 'Fuel Type':
                  ad.fuel = tr.children('td').text().trim();
                  break;
                default:
                  break;
              }
              nextTr();
            }, function() {
              var newAd = new Ad(ad);
              newAd.save(function(err) {
              	if(!err) {
                  sendCars.push(ad);
              		next();
              	} else {
              		callback(err);
              	}
              })
            });
          }).onError(function(err) {
            callback(err);
          });
        }).onError(function(err) {
          callback(err);
        });
      }, function() {
      	socket.emit('progress', 100);
        res.send(sendCars);
      });
    }
  ], function(err) {
    console.log(err);
  });
});

router.get('/all/cars', function(req, res) {
  var f = ff(function() {
    Ad.find().exec(f.slot());
  }, function(ads) {
    console.log(ads);
    res.send(ads);
  })
});
module.exports = router;
