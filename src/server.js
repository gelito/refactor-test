const translate = require('./translator');

// Im gonna use an array, in case boss wanna
// translate more than one line.

const text = [
    "quiero trabajar con los mejores",
    "hola Caracola, toma una Coca-Cola",
    "yo voy con Wadu Hek",
    "quieres mi bici amarilla?"
]
const targetLang = 'en';

translate.translateText(text, targetLang)
.then(result => {
    result.forEach(sentence => {
        console.log(sentence);
    })
})
.catch((error) => {
    next(error);
})
