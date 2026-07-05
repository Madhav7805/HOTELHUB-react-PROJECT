const { createServer } = require("http")

http = require("http")
 http = createServer((req , res)=>{
    res.end("this is my server")
 });

 Server.listen(3000,()=>{
    console.log("listening")
 });