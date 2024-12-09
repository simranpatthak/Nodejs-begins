const http=require('http')
const fs=require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.method, req.url)
if (req.method=="GET" && req.url=="/getprodcut"){
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
            res.end(data)
        }
    })
  
}else if(req.method=="POST" && req.url=="/addproduct"){
    res.end("Prodcut Added succesfully")
}else{
    res.end("REquest is not match")
}

})

server.listen(8000,()=>{
    console.log("server is running")
})
