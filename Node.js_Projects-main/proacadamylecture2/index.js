const express=require("express")
const fs=require('fs')

const app=express()

app.get("/",(req,res)=>{
    res.send("hey world")
})
app.post("/addproduct",(req,res)=>{
//  console.log(req.body)
 fs.readFile("./db.json","utf-8",(err,data)=>{
    if(err){
        res.end(err);
    }else {
        const newdata= JSON.parse(data);
        newdata.product.push(req.body);
        fs.writeFile("./db.json",JSON.stringfy(newdata),(err)=>{
           if(err){
            res.send(err);
           }else{
            res.send("data is added")
           }
        })
    }
 })
 res.send("Product added succesfully")
})

app.listen(8080,()=>{
    console.log("server is running")
})