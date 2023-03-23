const fs = require("fs");
const writeStr = fs.createWriteStream("hello4.txt");
// writeStr.write("Перший рядок\n");
// writeStr.write("Другий рядок\n");
// writeStr.end("Третій рядок\n");
const readStream  = fs.createReadStream("hello2.txt", "utf8");
readStream.pipe(writeStr);