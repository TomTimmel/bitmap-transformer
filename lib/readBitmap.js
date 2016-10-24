const fs = require('fs');
const readBitmap = require('../lib/readBitmap');

module.exports = function readBitmap() {
var path = './images/palette-bitmap.bmp'
fs.readFile(path, (err, buffer) =>{
        if (err) console.log('error ', err);
        var buffer1 = buffer;
        console.log('buffs ', buffer1);
    // cb(null, buffer);
    });
};

module.exports();