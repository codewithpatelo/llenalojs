const zipFolder = require('zip-a-folder');

class ZipAFolder {
  static main() {
    console.log('Compressing extension... please wait');
    zipFolder.zipFolder('./', '../llenalo.zip', (err) => {
      if (err) {
        console.log('Something went wrong!', err);
      }
    });
  }
}

ZipAFolder.main();
