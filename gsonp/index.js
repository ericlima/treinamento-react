const gsonp = require('jsonp');

const url = 'http://localhost:3000/usuario'

const options = { timeout: 5000 }

const cb = (err,data) => {
    console.log(data);
}

gsonp(url,options,cb)