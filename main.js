// function processRequest(data){
//     console.log(data);
// }
// function processRequistWithDelay(data){
//     setTimeout(()=>{
//         console.log(data)
//     }, 0);
// }
// console.log("Starting execution");
// //processRequest("Processing requist");
// processRequistWithDelay("Processing requist....");
// console.log("Ending execution");
// for(let i=1; i<=3;i++){
//     setTimeout(()=>{
//         console.log(`Executed after: ${i} seconds`);
//     }, i*1000);
// }
const fs = require("fs");
////Sync version
// try{
// let data = fs.readFileSync("hello.txt", "utf8");
// console.log(data);
// }
// catch(err){
//     console.error(err.message);
// }
// fs.readFile("hello1.txt", "utf8", (err, data)=>{
//     if(err)
//     //throw(err);
//     console.error(err.message);
//     else
//     console.log(data);
// })
// fs.writeFileSync("readme.txt", "Привіт Node.JS!");
// console.log("file was written!");
fs.appendFile("readme.txt", "\nМені подобається TypeScript!", (err, data)=>{
    if(err) throw err;
    console.log("file was written!");
});