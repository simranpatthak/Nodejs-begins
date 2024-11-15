const http =require("http")

const server= http.createServer((req,res)=>{
    console.log(req.url)
})
server.listen(3000,()=>{
    console.log("server is running at 3000")
})