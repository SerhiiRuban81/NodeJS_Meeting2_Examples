const fs = require("fs");
const zlib = require("zlib");
const writeStr = fs.createWriteStream("hello5.txt.gzip");
const gzip = zlib.createGzip();
// writeStr.write("Перший рядок\n");
// writeStr.write("Другий рядок\n");
// writeStr.end("Третій рядок\n");
const readStream  = fs.createReadStream("hello2.txt", "utf8");
readStream.pipe(gzip).pipe(writeStr);