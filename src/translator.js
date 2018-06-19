"use strict";

const Translate = require('@google-cloud/translate');
const async = require('async');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});


TranslateService.translateText = function (content, targetLang, next) {

  let calls = [];

  calls.push((cb) => {
    translate
      .translate(content, targetLang)
    // if (err) {
    //   console.log('ERROR', err)
    // } else {
    //   return cb(null, results[0])
  

    .then(results => {
      return cb(null, results[0]);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  })

  // let waterfall = (calls, (err, res) => { 

  //   if(next) next (err,res)
  // })
  async.waterfall(calls, function (err, response) {
    if (next) next(err, response);
  });
};



module.exports = TranslateService;