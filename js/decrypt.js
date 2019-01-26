require('dotenv').config()
const fs = require('fs');
const d = process.env.MENSAJE;

const key = process.env.CLAVE;
 
const encryptor = require('simple-encryptor')(key);

const data = JSON.stringify(encryptor.decrypt(d));

console.log(data);
console.log('File created in js/data.json');

fs.writeFileSync('js/data.json', data);
