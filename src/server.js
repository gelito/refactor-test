const translate = require('./translator')

const text = "quiero trabajar con los mejores"

const targetLang = 'en'

translate.translateText(text, targetLang)
  .then(result => console.log(result))
  .catch(err => console.log(err));
