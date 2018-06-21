const translate = require('./translator');

const text = ["Hola mundo", "quiero trabajar con los mejores"] // could be an array of strings or a unique string
const targetLang = 'en' // must be a string

translate.translateText(text, targetLang)
  .then(response => {
    console.log(response[0])
  })
  .catch(error => {
    console.error(error)
  })