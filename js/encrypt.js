require('dotenv').config()
const key = process.env.CLAVE;
 
// Create an encryptor:
const encryptor = require('simple-encryptor')(key);

let data =
{
  "firsname": "Patricio Julián",
  "lastname": "Gerpe",
  "age": "26",
  "phone": "+447472145032",
  "address_1" : "37 Thornhill Road",
  "address_2" : "",
  "country" : "United Kingdom",
  "state" : "London",
  "zip" : "E10 5LL",
  "city": "London",
  "email": "patricio@enpov.com",
  "website": "https://www.linkedin.com/in/patriciogerpe/",
  "techarea": "Artificial Intelligence",
  "city": "London",
  "affiliation_1": "Enpov",
  "affiliation_2": "Inteligencia Artificial Argentina",
  "affiliation_3": "",
  "reference_1_name": "Evangelos Markopoulos",
  "reference_1_email": "e.markopoulos@qmul.ac.uk",
  "reference_1_phone": "",
  "reference_2_name": "Hernán Borre",
  "reference_2_email": "borre.hernan@gmail.com",
  "reference_2_phone": "+5491166021386 ",
  "reference_3_name": "Gabriel Maggiotti",
  "reference_3_email": "gmaggiotti@gmail.com",
  "reference_3_phone": "+5491164098823",
};

data = encryptor.encrypt(data);
console.log(data);
console.log('Data encrypted');


module.exports = encryptor;
module.exports = data;