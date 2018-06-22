
const translate = require('./translator')

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

translate.translateText(text, targetLang, (err, result) => 
  err ? next(err) : console.log(result));