const fs = require("fs");
const writeStr = fs.createWriteStream("hello3.txt");
// writeStr.write("Перший рядок\n");
// writeStr.write("Другий рядок\n");
// writeStr.end("Третій рядок\n");
const readStream  = fs.createReadStream("hello2.txt", "utf8");
readStream.on("data", (chunk)=>{
    console.log(chunk);
    writeStr.write(chunk);
})