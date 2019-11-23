let data = require('../json/data.json');
let list = require('../hbs/people.hbs');

document.querySelector('#players').innerHTML = list(data);


