const translate = require('./translator');

const text = "quiero trabajar con los mejores";
const targetLang = 'en';

console.log(translate);

translate.translateText(text, targetLang, (err,res) =>{
	if(err) console.error(err);
	else console.log(res);
});