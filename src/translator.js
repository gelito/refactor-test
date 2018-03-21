"use strict";

const Translate = require('@google-cloud/translate');

const TranslateService = {};
const translate = new Translate({
    keyFilename: './translator.conf.json',
});

TranslateService.translateText = (content, targetLang) => {

    const calls = [];

    /* I'll use "Promise.all" to solve this instead
       of "async.watterfall". In the original code
       there was no need to use either, cos there was
       only one element within the array. */

    content.forEach(item => {
        calls.push(
        translate
          .translate( item, targetLang )
          .then(results => {
              return results[0]
          })
          .catch(err => console.error(`ERROR: ${err}`));
      );
    })

    // I rather return a Promise than a Callback

    return new Promise((resolve, reject) => {
        Promise.all(calls)
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    })
}

module.exports = TranslateService;
