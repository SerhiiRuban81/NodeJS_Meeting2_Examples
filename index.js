const express = require("express");
let author = process.argv[2];
let port = process.argv[3];
port = port ? port : 3000;
const app = express();
app.use(express.static("public"));
app.get("/good/:id", (req, resp)=>{
    //resp.write("Hello world of Express JS Framework!");
    resp.send(`Info about product with id: ${req.params.id}`);
});
app.get("/", (req, resp)=>{
    resp.setHeader("content-type", "text/plain;charset=utf-8")
    resp.write("Hello world of Express JS Framework!\n");
    resp.end(`Автор: Сергій ${author}`);
});
app.listen(port, ()=>{
    console.log(`Server starts at port ${port}`);
})