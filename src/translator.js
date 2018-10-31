"use strict";

const Translate = require('@google-cloud/translate');
const async = require('async');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = (async (content, targetLang, next) => {

  try {
    const calls = [];
    calls.push(await translate.translate(content, targetLang)[0])

  } catch {
    (err, response) => {
      if (next) next(err, response);
    };
  }
});

module.exports = TranslateService;
