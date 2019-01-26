# LlenaloJS
[![npm version](https://badge.fury.io/js/recht.svg)](https://badge.fury.io/js/recht)
[![build](https://travis-ci.org/patelotech/llenalojs.svg?branch=master)](https://travis-ci.org/patelotech/llenalojs)
[![Coverage Status](https://coveralls.io/repos/github/patelotech/project/badge.svg?branch=master)](https://coveralls.io/github/patelotech/project?branch=master)
[![dependencies Status](https://david-dm.org/patelotech/project/status.svg)](https://david-dm.org/patelotech/project)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubpatelotechcontent.com/patelotech/project/master/LICENSE) 

Esta extensión de Chrome ayuda a la gente a llenar de manera autómatica extensos formularios a través de posteos automatizados. Esta extensión es 100% open-source, licencia MIT y abierta a la comunidad. La mantenemos en el grupo 'PodemosAprender' (https://www.facebook.com/podemosaprendermas/). Esta extensión se puede usar para automatización de procesos, como el llenalo de grandes plantilllas de datos de una manera más automatizada. 

## Instalación para entorno de desarrolo

Si quéres colaborar en este repositorio estos son los pasos a seguir:

1)  Clonar el repositorio
` git clone https://github.com/patelotech/llenalojs.git `

2)  Configuramos la extensión en Chrome

*  Entramos a chrome://extensions
*  Le damos a developer mode.
![alt text](./images/readme1.png "")
*  Cargamos el carpeta de nuestra aplicación en 'load unpackage'
![alt text](./images/readme2.png "")


## Estilo de CSS

-   Material Design Lite

## Package roadmap

-   [ ] Llenar un formulario de manera automatica.
-   [ ] Agregar opciones personalizadas.



## Licencia

MIT

## Contribuir

*  Fijate de leer la documentación para crear extensiones de Chrome:
[](https://developer.chrome.com/extensions/getstarted "")
*  Asegurate de leer las guias para desarrollar extensiones en Chrome:
[](https://developer.chrome.com/extensions/single_purpose "")
*  El archivo **js/background.js** es donde se ejecuta el código que queremos.
*  El archivo **popup.html** es donde esta la UI de nuestra extensión.
*  Usamos estilo de código AIRBNB. [AIRBNB JS CODE STYLE](https://dev.mysql.com/doc/ "AIRBNB JS CODE STYLE")
*  Antes de comitear dale ` npm run lint -- --fix ` para lintear el código.
*  Una vez que pusheaste y/o se aceptó tu pull request fijate de chequear que puedas correr la extensión y corra el build en travis.
[](https://travis-ci.org/patelotech/llenalojs "")

