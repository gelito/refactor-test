"use strict";

const Translate = require('@google-cloud/translate');
const async = require('async');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = async (content, targetLang, next) => {  
  try {
    const results = await translate.translate(content, targetLang);
    next(null, results[0]);
  } catch (err) {
    console.error('ERROR:', err);
  }
};

module.exports = TranslateService;