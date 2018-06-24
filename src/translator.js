const Translate = require('@google-cloud/translate');
const async = require('async');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = async(content, targetLang, next) => {

  try{
    let trans = await translate.translate( content, targetLang );
    next(null,trans[0]);
  }catch(err){
    next(err,null);
  }
  
};

module.exports = TranslateService;
