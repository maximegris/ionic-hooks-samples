#!/usr/bin/env node

/**
 * After prepare, files are copied to the platforms/ios and platforms/android folders.
 * Lets clean up some of those files that arent needed with this hook.
 */
var fs = require('fs');
var path = require('path');
var mv = require('mv');

var mvDistFileToPlatform = function(src, dest, platform) {
  mv(src, dest, {
    mkdirp: true
  }, function(err) {
    if (typeof err != 'undefined') {
      console.log("err");
      console.log(err);
      console.log("ERROR when moving CSS folder to " + platform + " platform");
    } else {
      console.log("CSS folder moved OK to " + platform + " platform");
    }
  });
};

var iosPlatformsDir_dist_css = path.resolve(__dirname, '../../platforms/ios/www/dist/dist_css');
var iosPlatformsDir_dist_js = path.resolve(__dirname, '../../platforms/ios/www/dist/dist_js');
var iosPlatformsDir_dist_lib = path.resolve(__dirname, '../../platforms/ios/www/dist/lib');
var iosPlatformsDir_dist_assets = path.resolve(__dirname, '../../platforms/ios/www/dist/assets');
var iosPlatformsDir_dist_index = path.resolve(__dirname, '../../platforms/ios/www/dist/index.html');
var iosPlatformsDir_www_css = path.resolve(__dirname, '../../platforms/ios/www/dist_css');
var iosPlatformsDir_www_js = path.resolve(__dirname, '../../platforms/ios/www/dist_js');
var iosPlatformsDir_www_lib = path.resolve(__dirname, '../../platforms/ios/www/lib');
var iosPlatformsDir_www_assets = path.resolve(__dirname, '../../platforms/ios/www/assets');
var iosPlatformsDir_www_index = path.resolve(__dirname, '../../platforms/ios/www/index.html');

console.log("Moving dist files to iOS platform");
//mvDistFileToPlatform(iosPlatformsDir_dist_css, iosPlatformsDir_www_css, 'ios');
//mvDistFileToPlatform(iosPlatformsDir_dist_js, iosPlatformsDir_www_js, 'ios');
//mvDistFileToPlatform(iosPlatformsDir_dist_lib, iosPlatformsDir_www_lib, 'ios');
//mvDistFileToPlatform(iosPlatformsDir_dist_assets, iosPlatformsDir_www_assets, 'ios');
//mvDistFileToPlatform(iosPlatformsDir_dist_index, iosPlatformsDir_www_index, 'ios');


var androidPlatformsDir_dist_css = path.resolve(__dirname, '../../platforms/android/assets/www/dist/dist_css');
var androidPlatformsDir_dist_js = path.resolve(__dirname, '../../platforms/android/assets/www/dist/dist_js');
var androidPlatformsDir_dist_lib = path.resolve(__dirname, '../../platforms/android/assets/www/dist/lib');
var androidPlatformsDir_dist_assets = path.resolve(__dirname, '../../platforms/android/assets/www/dist/assets');
var androidPlatformsDir_dist_index = path.resolve(__dirname, '../../platforms/android/assets/www/dist/index.html');
var androidPlatformsDir_www_css = path.resolve(__dirname, '../../platforms/android/assets/www/dist_css');
var androidPlatformsDir_www_js = path.resolve(__dirname, '../../platforms/android/assets/www/dist_js');
var androidPlatformsDir_lib = path.resolve(__dirname, '../../platforms/android/assets/www/lib');
var androidPlatformsDir_assets = path.resolve(__dirname, '../../platforms/android/assets/www/assets');
var androidPlatformsDir_www_index = path.resolve(__dirname, '../../platforms/android/assets/www/index.html');

console.log("Moving dist files to Android platform");
mvDistFileToPlatform(androidPlatformsDir_dist_css, androidPlatformsDir_www_css, 'android');
mvDistFileToPlatform(androidPlatformsDir_dist_js, androidPlatformsDir_www_js, 'android');
mvDistFileToPlatform(androidPlatformsDir_dist_lib, androidPlatformsDir_lib, 'android');
mvDistFileToPlatform(androidPlatformsDir_dist_assets, androidPlatformsDir_assets, 'android');
mvDistFileToPlatform(androidPlatformsDir_dist_index, androidPlatformsDir_www_index, 'android');
