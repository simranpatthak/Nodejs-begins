const http = require("http");
const fs=require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  if (req.method=="GET" && req.url=="/getProduct") {
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.end(err)
        }
        else{
            console.log(data);
            res.end("okay");
        }
    })
   
  } else if ((req.method=="POST" && req.url=="/addproduct")) {
    res.end("Product added successfully");
  } else {
    res.end("Requst is not match");
  }
});

server.listen(8080, () => {
  console.log("Server run on 8080");
});
