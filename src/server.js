const translate = require('./translator');

const text = "quiero trabajar con los mejores";
const targetLang = 'ja';

console.log(translate);

translate.translateText(text, targetLang, function (err, result) {

  if (err) {
    next(err);
    return;
  }
  console.log(result);

});
